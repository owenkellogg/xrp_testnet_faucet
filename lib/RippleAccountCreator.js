import {Wallet} from 'ripple-lib'
import logger from './Logger'
import BB from 'bluebird'

export function createNewAccount() {

  return new Promise(function(resolve, reject) {
    logger.info('Generating new Ripple account');
    // Generate new account
    var account = Wallet.generate();
    logger.info('Generated new account:', account.address);
    resolve(account)
  })
}

