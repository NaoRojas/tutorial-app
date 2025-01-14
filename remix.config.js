module.exports = {
  // Other configuration...
  future: {
    v3_fetcherPersist: true,        // Updates fetcher persistence behavior
    v3_lazyRouteDiscovery: true,   // Uses lazy route discovery
    v3_relativeSplatPath: true,    // Updates relative splat route handling
    v3_singleFetch: true,          // Combines fetches into a single request
    v3_throwAbortReason: true,     // Changes error format for aborted requests
  },
};
