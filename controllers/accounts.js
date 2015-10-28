import {fundNewAccount} from '../lib/RippleAccountCreator'
import Config from '../lib/Config'

module.exports = function(models, lib) {

  return {
    create: function(req, res, next) {

      fundNewAccount().then(account => {
        res.status(201).send({
          account: account,
          balance: Config.get('XRP_AMOUNT')
        })
      }) 
      .catch(error => {
        res.status(500).send({
          error: error
        })
      })
    }
  }
}

