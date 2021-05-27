const { User } = require('../models');
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


  getUsers(offset = 0, limit = 10){
    return sequelize.query("SELECT * FROM Users LIMIT "+ limit +" OFFSET "+offset)
  } ,


   getAdmins() { 
    var x= User.findAll({
      where: {       
          role: 'admin' 
      }
    });
    return x
   },


   getAuthors() { 
    var x= User.findAll({
      where: {       
          role: 'author' 
      }
    });
    return x
   },


   getGuests(){ 
    var x= User.findAll({
      where: {       
          role: 'guest' 
      }
    });
    return x
    }, 


   getUser(id) {
    var x= User.findAll({
      where: {       
          id: id
      }
    });
    return x
    },


   getUserByEmail(email) { 
     var x= User.findAll({
      where: {       
        email: email 
      }
      });
      return x },


      async addUser(user) { 
      await User.create(user);
    },
      

    async updateUser(id,user) { 
    await User.update(user, {
      where: {
        id: id
      }
    });
    },


    async deleteUser(id) { 
    await User.destroy({
      where: {
        id: id
      }
    });
    },
   // D'autres méthodes jugées utiles
 }
