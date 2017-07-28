module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.png',
    'dist/**.svg',
    'dist/assets/images/*',
    'dist/assets/icons/*',
    'dist/assets/fonts/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  "runtimeCaching": [{
    "urlPattern": "/(.*)",
    "handler": "networkFirst"
  }],
  navigateFallback: '/index.html'
};
