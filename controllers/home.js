
module.exports = function(models, lib) {

  return {
    index: function(req, res, next) {
      res.status(200).send({
        success: true,
        actions: {
          'POST /accounts': 'create and fund an account with altnet XRP'
        }
      })
    }
  }
}

