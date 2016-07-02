if (process.env.NODE_ENV === 'production') {
	module.exports = require('./configure-store.prod').default;
} else {
	module.exports = require('./configure-store.dev').default;
}
