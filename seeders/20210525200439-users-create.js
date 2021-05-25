'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Users', [{
       username: 'John Doe',
       email: 'test@test.com',
       password: 'test',
       role : 'guest',
       createdAt: '2021-05-25 22:02:02',
       updatedAt: '2021-05-25 22:02:02'
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
