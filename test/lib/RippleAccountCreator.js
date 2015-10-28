import {fundNewAccount} from '../../lib/RippleAccountCreator'
import assert from 'assert'

describe('RippleAccountCreator', function() {

  it('#fundNewAccount should fund a new Ripple account on altnet with 10,000 XRP', done => {

    fundNewAccount().then(account => {
      console.log(account)
      assert(account.address)
      assert(account.secret)
      done()
    })
    .catch(error => {
      console.error('ERROR', error)
      done()
    })
  })
})
