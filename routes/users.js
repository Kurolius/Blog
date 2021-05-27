var express = require('express');
const router = express.Router();
var path = require('path');
const ArticleRepo = require('../repositories/articles')
router.use(express.static(path.join(__dirname, 'public')));
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let list = await ArticleRepo.getArticles()
  res.render(__dirname+"/view/users.ejs", { title: global.globalString , ls:list});
});
module.exports = router;
