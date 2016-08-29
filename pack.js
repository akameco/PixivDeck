'use strict';
require('babel-polyfill');

const webpack = require('webpack');
const packager = require('electron-packager');
const pify = require('pify');
const hardRejection = require('hard-rejection');
const meow = require('meow');
const execa = require('execa');

const pkg = require('./package.json');
const electronCfg = require('./webpack.config.electron');
const cfg = require('./webpack.config.production');

const deps = Object.keys(pkg.dependencies);
const devDeps = Object.keys(pkg.devDependencies);

hardRejection();

const version = pkg.version;

const cli = meow(`build app`, {
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

if (flags.all) {
	flags.macos = flags.windows = flags.linux = true;
}

const ignore = [
	'^/test($|/)',
	'^/release($|/)',
	'^/interface($|/)',
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
	'dir': './',
	'name': flags.name,
	'asar': flags.asar,
	'app-version': version,
	'overwrite': true,
	ignore,
	'prune': true,
	'out': 'release'
};

const webpackBuild = cfg => pify(webpack)(cfg);

const osIcon = plat => {
	if (plat === 'darwin') {
		return '.icns';
	} else if (plat === 'win32') {
		return '.ico';
	}
	return '.png';
};

async function build() {
	console.log('build main...');
	await webpackBuild(electronCfg);

	console.log('build renderer...');
	await webpackBuild(cfg);
}

async function pack(opts) {
	const {platform, arch, zip} = opts;
	await build();
	console.log('start pack...');
	const pkgOpt = Object.assign({}, DEFAULT_OPTS, {
		platform,
		arch
	});
	await pify(packager)(pkgOpt);

	process.chdir(`${__dirname}/release/PixivDeck-${platform}-${arch}/`);
	console.log(process.cwd());

	console.log('zip...');
	await execa.spawn('zip', [zip.opt, `../PixivDeck-${zip.dest}-${version}.zip`, zip.src]);

	console.log(`finish ${platform}`);
}

const buildMacOS = async () => {
	console.log('macos');
	await pack({
		platform: 'darwin',
		arch: 'x64',
		zip: {
			opt: '-ryXq9',
			dest: 'macos',
			src: 'PixivDeck.app'
		}
	});
};

const buildWindows = async () => {
	console.log('windows');
	await pack({
		platform: 'win32',
		arch: 'ia32',
		zip: {
			opt: '-ryq9',
			dest: 'windows',
			src: './*'
		}
	});
};

const buildLinux = async () => {
	console.log('linux');
	await pack({
		platform: 'linux',
		arch: 'x64',
		zip: {
			opt: '-ryq9',
			dest: 'linux',
			src: '*'
		}
	});
};

if (flags.macos) {
	buildMacOS();
}
if (flags.windows) {
	buildWindows();
}
if (flags.linux) {
	buildLinux();
}
