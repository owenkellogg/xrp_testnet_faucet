import {createNewAccount} from '../lib/RippleAccountCreator'
import {fundAccount} from '../lib/RippleAccountFunder'
import Config from '../lib/Config'

module.exports = function(models, lib) {

  return {
    create: function(req, res, next) {

      createNewAccount().then(account => {
        res.status(201).send({
          account: account,
          balance: Config.get('XRP_AMOUNT')
        })
        fundAccount(account.address)
      })
      .catch(error => {
        res.status(500).send({
          error: error
        })
      })
    }
  }
}

