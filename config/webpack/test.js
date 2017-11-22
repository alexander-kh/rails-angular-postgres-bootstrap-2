const environment = require('./environment')

environment.plugins.get('Manifest').opts.writeToFileEmit = process.env.NODE_ENV !== 'test'

module.exports = environment.toWebpackConfig()
