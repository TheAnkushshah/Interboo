module.exports = {
	// ...existing code...
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// Mock 'child_process' for client-side builds
			config.resolve.fallback = {
				...config.resolve.fallback,
				child_process: false,
			};
		}
		return config;
	},
};
