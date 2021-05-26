var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/auth', async function(req, res) {
  var user = req.body.username;
  var pass = req.body.pass;
  if((await usersRepo.verifUser(user,pass)) != 0){
    res.redirect('/users');
  }else{
    res.send('Incorrect Username and/or Password!');
  }

});
module.exports = router;
