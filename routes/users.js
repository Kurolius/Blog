const router = require('express').Router();
const usersRepo = require('../repositories/users')
/* GET users listing. */
router.get('/', async function(req, res) {
  var usersList=res.send(await usersRepo.getAllUsers())
});
module.exports = router;
