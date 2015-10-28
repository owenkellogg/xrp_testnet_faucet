import config from 'nconf'

config.env()

config.defaults({
  'RIPPLED_SERVER_WEBSOCKET': 'wss://s.altnet.rippletest.net:51233',
  'RIPPLED_SERVER_REST': 'https://api.altnet.rippletest.net:5990'
})

export default config

