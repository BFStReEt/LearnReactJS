'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: 'admin1234', //plain text -> hash password
      firstName: 'Pen',
      lastName: 'Nguyen',
      address: 'Ho Chi Minh City',
      gender: 1,
      keyRole: 'R1',

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
