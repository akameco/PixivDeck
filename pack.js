'use strict';
require('babel-polyfill');

const os = require('os');
const webpack = require('webpack');
const packager = require('electron-packager');
const del = require('del');
const pify = require('pify');
const hardRejection = require('hard-rejection');
const meow = require('meow');

const pkg = require('./package.json');
const electronCfg = require('./webpack.config.electron');
const cfg = require('./webpack.config.production');

const deps = Object.keys(pkg.dependencies);
const devDeps = Object.keys(pkg.devDependencies);

hardRejection();

const cli = meow(`
	Options
		--asar, -a     asar [Default false]
		--name, -n     app name [Default package productName]
		--icon, -i     icon [Default app/app]
`, {
	defaluts: {
		asar: false,
		name: pkg.productName,
		icon: 'app/app'
	},
	alias: {
		a: 'asar',
		n: 'name',
		i: 'icon'
	}
});

const {flags} = cli;

const ignore = [
	'^/test($|/)',
	'^/release($|/)',
	'^/main.development.js'
].concat(
	devDeps.map(name => `/node_modules/${name}($|/)`)
)
.concat(
	deps
		.filter(name => !electronCfg.externals.includes(name))
		.map(name => `/node_modules/${name}($|/)`)
);

const DEFAULT_OPTS = {
	dir: './',
	name: flags.name,
	asar: flags.asar,
	version: '1.3.4',
	ignore
};

const build = cfg => pify(webpack)(cfg);

const osIcon = plat => {
	if (plat === 'darwin') {
		return '.icns';
	} else if (plat === 'win32') {
		return '.ico';
	}
	return '.png';
};

const pack = (platform, arch) => {
	if (platform === 'darwin' && arch === 'ia32') {
		return;
	}

	const opts = Object.assign({},
		DEFAULT_OPTS,
		{icon: osIcon(platform)},
		{ // eslint-disable-line quote-props
			platform,
			arch,
			overwrite: true,
			prune: true,
			'app-version': pkg.version || DEFAULT_OPTS.version,
			out: `release/${platform}-${arch}`
		});

	return pify(packager)(opts).then(() => {
		console.log(`${platform}-${arch} finished!`);
	});
};

const packAllPlatforms = () => {
	const archs = ['ia32', 'x64'];
	const platforms = ['linux', 'win32', 'darwin'];
	platforms.forEach(plat => {
		archs.forEach(arch => pack(plat, arch));
	});
};

console.log('start pack...');

build(electronCfg)
	.then(() => build(cfg))
	.then(() => del('release'))
	.then(() => {
		if (flags.all) {
			packAllPlatforms();
		} else {
			pack(os.platform(), os.arch());
		}
	});

