/**
 * testVars.js - для проверки
 */

const { Sum } = require('../FB');

module.exports = function() {
  return {
    SUM1: new Sum(7, 199, 3),
    SUM2: new Sum(20, 40, 1)
  };
};
