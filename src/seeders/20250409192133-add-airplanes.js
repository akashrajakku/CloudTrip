'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'airbus 890',
        capacity: 400,
        createdAt:new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'airbus 920',
        capacity: 500,
        createdAt:new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'airbus 960',
        capacity: 480,
        createdAt:new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
