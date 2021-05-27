const { Article } = require('../models')
var sequelize = require('sequelize');
 module.exports = {
   getAllArticles() {
     return Article.findAll()
   },
   // méthodes à implémenter
   getArticles(offset = 0, limit = 10){
    return  Article.findAll({ offset: offset, limit: limit });
  } ,


   getArticlesById(id) {
    var x= Article.findAll({
      where: {       
          id: id
      }
    });
    return x
    },


    async addArticles(Articles) { 
      await Article.create(Tags);
    },
      

    async updateArticles(id,Articles) { 
    await Article.update(Tags, {
      where: {
        id: id
      }
    });
    },


    async deleteArticles(id) { 
    await Article.destroy({
      where: {
        id: id
      }
    });
  },
   // D'autres méthodes jugées utiles
 }
