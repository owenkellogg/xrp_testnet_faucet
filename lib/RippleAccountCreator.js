import {Remote, Wallet} from 'ripple-lib'
import Config from './Config'
import logger from './Logger'
import BB from 'bluebird' 

if (!Config.get('RIPPLED_SERVER_WEBSOCKET')) {
  throw new Error('Must supply RIPPLED_SERVER_WEBSOCKET environment variable');
} else if (!Config.get('RIPPLE_ADDRESS') || !Config.get('RIPPLE_SECRET')) {
  throw new Error('Must supply RIPPLE_ADDRESS and RIPPLE_SECRET environment variables');
}

export function fundNewAccount() {

  var remote = new Remote({
    trusted:        true,
    local_signing:  true,
    local_fee:      true,
    fee_cushion:     1.5,
    servers: [ Config.get('RIPPLED_SERVER_WEBSOCKET') ]
  });

  remote.setSecret(Config.get('RIPPLE_ADDRESS'), Config.get('RIPPLE_SECRET'));

  return new Promise(function(resolve, reject) {

    logger.info('Generating new Ripple account');
    // Generate new wallet
    var wallet = Wallet.generate();
    logger.info('Generated new account:', wallet.address);

    var remoteConnect = BB.promisify(remote.connect, remote);
    return remoteConnect().then(function() {
      // Send XRP to new wallet
      var transaction = remote.createTransaction('Payment', {
        account: Config.get('RIPPLE_ADDRESS'),
        destination: wallet.address,
        // Convert to drops
        amount: Config.get('XRP_AMOUNT') * 1000000
      })
      logger.info('Submitting tx')
      var txSubmit = BB.promisify(transaction.submit, transaction)
      return txSubmit().then(function(res) {
        logger.info('Funded '+wallet.address+' with '+XRP_AMOUNT+' XRP');
        resolve(wallet)
        remote.disconnect()
      })
    }).catch(function(err) {
      logger.info('ERROR', err)
      reject(err)
      remote.disconnect()
    })
  })
}

