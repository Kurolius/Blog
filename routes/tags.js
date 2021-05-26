const router = require('express').Router();
const usersRepo = require('../repositories/tags')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("done")
  var usersList=res.send(await usersRepo.getAllTags())
});
module.exports = router;