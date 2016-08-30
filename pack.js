'use strict';
require('babel-polyfill');

const pify = require('pify');
const packager = require('electron-packager');
const hardRejection = require('hard-rejection');
const pkg = require('./package.json');
const electronCfg = require('./webpack.config.electron');

hardRejection();

const deps = Object.keys(pkg.dependencies);
const devDeps = Object.keys(pkg.devDependencies);

const ignoredDeps = deps
	.filter(name => !electronCfg.externals.includes(name))
	.map(name => `/node_modules/${name}($|/)`);
const ignoredDevDeps = devDeps.map(name => `/node_modules/${name}($|/)`);

const ignore = [
	'^/test($|/)',
	'^/release($|/)',
	'^/media($|/)',
	'^/static($|/)',
	'^/webpack+?',
	'^/pack.js$',
	'^/interface($|/)',
	'^/CSSFlowStub.js.flow',
	'^/main.development.js',
	...ignoredDevDeps,
	...ignoredDeps
];

async function pack(target) {
	const buildOpts = {
		macos: {
			platform: 'darwin',
			arch: 'x64',
			icon: 'static/Icon.icns'
		},
		windows: {
			platform: 'win32',
			arch: 'ia32',
			icon: 'static/Icon.ico'
		},
		linux: {
			platform: 'linux',
			arch: 'x64',
			icon: 'static/Icon.png'
		}
	};

	const {platform, arch, icon} = buildOpts[target];
	const pkgOpt = {
		'dir': './',
		'name': pkg.productName,
		'asar': true,
		'app-version': pkg.version,
		'overwrite': true,
		'prune': true,
		'out': 'release',
		ignore,
		platform,
		arch,
		icon
	};

	await pify(packager)(pkgOpt);
}

const input = process.argv.slice(2)[0];

if (!input || !['macos', 'windows', 'linux'].includes(input)) {
	console.error('input required');
	process.exit(1); // eslint-disable-line xo/no-process-exit
}

pack(input);
