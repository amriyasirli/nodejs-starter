'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: "user_4Rq4EEf3Bc",
        firstName: "Jhon",
        lastName: "Doe",
        email: "jhondoe@example.com",
        username: "jhondoe62",
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: false,
      },
      {
        id: "user_JViEjX2t4E",
        firstName: "Yassirli",
        lastName: "Amri",
        email: "amriyasirli62@gmail.com",
        username: "amri_yasirli",
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: false,
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
