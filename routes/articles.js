const router = require('express').Router();
const usersRepo = require('../repositories/articles')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("done")
  var usersList=res.send(await usersRepo.getAllArticles())
});
module.exports = router;