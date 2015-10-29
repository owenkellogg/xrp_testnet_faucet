import {fundAccount} from '../../lib/RippleAccountFunder'
import assert from 'assert'

describe('RippleAccountFunder', function() {

  it('#fundAccount should fund a Ripple account on altnet with 10,000 XRP', done => {

    fundAccount('rEoFpkGejwefM7xKverU5GnaSF3dYanPGA').then(() => {
      done()
    })
  })
})
