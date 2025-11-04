const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
	resolver: {
		// Some packages (or older tooling) attempt to import deep cjs subpaths
		// from React like 'react/cjs/react.development'. Newer Node resolution
		// and the `exports` field on the React package can cause Metro to warn
		// and fall back to a file-based resolution. Provide explicit aliases so
		// Metro resolves these paths cleanly and the warning is removed.
		extraNodeModules: {
			'react/cjs/react.development': path.resolve(__dirname, 'node_modules', 'react', 'cjs', 'react.development.js'),
			'react/cjs/react.production.min': path.resolve(__dirname, 'node_modules', 'react', 'cjs', 'react.production.min.js')
		}
	}
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
