const router = require('express').Router();
const usersRepo = require('../repositories/comments')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("done")
  var usersList=res.send(await usersRepo.getAllComments())
});
module.exports = router;