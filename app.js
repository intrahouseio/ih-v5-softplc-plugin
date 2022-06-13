/**
 * app.js
 */

const util = require('util');

const utils = require('./lib/utils');
const Devo = require('./lib/devo');
const devagent = require('./lib/devagent');

module.exports = async function(plugin) {
  const period = plugin.params.data.period || 1000;

  // Скрипт нужно будет загрузить из проекта
  const mainScript = require('./test/testScript');

  // Создать объекты (FB) из декларативной части - тоже брать из проекта
  const assets = require('./test/testVars')();
  plugin.log('assets: ' + util.inspect(assets));

  // Устройства системы
  const devs = {};
  devagent.start(plugin);

  // Сформировать список устройств
  const arr = utils.getFilterArrayFromParamProps(plugin.params.data);

  // Подписка
  const filter = { did_prop: arr };
  plugin.onSub('devices', filter, data => {
    if (!data) return;
    data.forEach(item => acceptDevValue(item));
  });

  // Запустить основной скрипт
  setInterval(run, period);

  // Получаем значение и присваиваем в devs
  function acceptDevValue(item) {
    // { did: 'd0385', dn: 'TEST_DT001', prop: 'error', value: 0 }
    plugin.log('OnSUB ' + util.inspect(item));
    if (item.dn && item.prop) {
      if (!devs[item.dn]) devs[item.dn] = new Devo(item, devagent);
      devs[item.dn][item.prop] = item.value;
    }
  }

  function run() {
    try {
      plugin.log('Run script  ');
      mainScript(assets, devs, debug);
      devagent.sendCommands();
    } catch (e) {
      plugin.log('ERROR: ' + util.inspect(e));
    }
  }

  function debug(x) {
    if (x == undefined) return;
    const str = typeof x == 'object' ? util.inspect(x, null, 6) : x.toString();
    // plugin.log('DEBUG: ' + str);
  }

  process.on('SIGTERM', () => {
    process.exit(0);
  });
};
