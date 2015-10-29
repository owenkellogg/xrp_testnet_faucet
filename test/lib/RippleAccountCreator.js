import {createNewAccount} from '../../lib/RippleAccountCreator'
import assert from 'assert'

describe('RippleAccountCreator', function() {

  it('#createNewAccount should generate keys for a new Ripple account', done => {

    createNewAccount().then(account => {
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
