const { Tag } = require('../models')
 module.exports = {
   getAllTags() {
     return Tag.findAll()
   },
   // méthodes à implémenter
   getUsers(offset = 0, limit = 10) { },
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
