'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var i
    var j
    var h
    for(i=7;i<=10;i++){
        var yearTag=(2000*1)+i
        await queryInterface.bulkInsert('Tags', [{
          name: 'name ' + i,
          createdAt: yearTag + '-05-25 22:02:02',
          updatedAt: yearTag + '-05-25 22:02:02'
        }], {});
    }

    for(i=2;i<=25;i++){
      var year=(2000*1)+i
      await queryInterface.bulkInsert('Users', [{
        id: i,
        username: 'User ' + i,
        email: 'test'+i+'@test.com',
        password: 'test_'+i,
        role : 'guest',
        createdAt: year + '-05-25 22:02:02',
        updatedAt: year + '-05-25 22:02:02'
      }], {});
      for(h=1;h<=10;h++){
        await queryInterface.bulkInsert('Articles', [{
          id: '0'+i+h,
          title: 'title ' + i +h,
          content: 'content'+ i +h,
          published: 1,
          createdAt: year + '-05-25 22:02:02',
          updatedAt: year + '-05-25 22:02:02',
          Userid: i
        }], {});

        for(j=1;j<=6;j++){
          await queryInterface.bulkInsert('ArticleTags', [{
            ArticleId:  '0'+i+h,
            Tagid:  j ,
            createdAt: year + '-05-25 22:02:02',
            updatedAt: year + '-05-25 22:02:02'
          }], {});
        }

        for(j=0;j<10;j++){
          await queryInterface.bulkInsert('Comments', [{
            content: 'content_'+ i + j,
            createdAt: year + '-05-25 22:02:02',
            updatedAt: year + '-05-25 22:02:02',
            Articleid: '0'+i+h
          }], {});
        }
      }
    }
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
