var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(__dirname+"/view/signUp.html");
});
module.exports = router;