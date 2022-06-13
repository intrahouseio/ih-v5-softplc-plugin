/**
 * testScript.js - для проверки 
 */

 module.exports = function (a, devs, debug) {
  // Два экземпляра одного класса 
  debug('SUM1');
  a.SUM1.next();
  debug(a.SUM1);

  debug('SUM2');
  a.SUM2.next();
  debug(a.SUM2);

  // Работа с устройством - чтение и запись свойств
  devs.TEST_DT001.setValue('setpoint', a.SUM2.Q);
  debug('TEST_DT001: setpoint = '+devs.TEST_DT001.setpoint+' SET '+a.SUM2.Q);
 }