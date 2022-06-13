/**
 * basicsmart
 */
const util = require('util');

const plugin = require('ih-plugin-api')();
const app = require('./app');

(async () => {
  plugin.log('SoftPLC plugin has started.', 0);

  try {
    // Получить параметры
    plugin.params.data = await plugin.params.get();
    plugin.log('Received params '+util.inspect(plugin.params.data));

    app(plugin);
  } catch (err) {
    plugin.exit(8, `Error: ${util.inspect(err)}`);
  }
})();
