
module.exports = function(router, controllers) {

  router.get('/', controllers.home.index)

  router.post('/accounts', controllers.accounts.create)
}

