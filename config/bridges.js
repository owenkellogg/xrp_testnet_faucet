require("babel/polyfill");

global['Bridges'] = {
  logger: require('winston')
}

var Application = require('bridges-application')
var path        = require('path')
var requireAll  = require('require-all-to-camel')

var application = new Application({
  directory : path.join(__dirname, '..'),
})

application.supervisor.start()

