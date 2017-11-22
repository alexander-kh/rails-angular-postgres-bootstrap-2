module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '**/*.spec.js'
    ],
    preprocessors: {
      '**/*.spec.js': ['webpack']
    },
    webpack: require('../../config/webpack/test.js'),
    browsers: ['PhantomJS']
  })
}