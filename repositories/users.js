const { User } = require('../models');
const { Op } = require("sequelize");
 module.exports = {
   getAllUsers() {
     return User.findAll()
   },
   // méthodes à implémenter
   verifUser(user,pass) {

        var x= User.count({
        where: {
          
            username: user ,
            password: pass 
          
        }
      });
      return x
    },
  getUser(id){

  } ,
   getAdmins() { },
   getAuthors() { },
   getGuests(){ }, 
   getUser(id) { },
   getUserByEmail(email) { },
   addUser(user) { },
   updateUser() { },
   deleteUser() { },
   // D'autres méthodes jugées utiles
 }
