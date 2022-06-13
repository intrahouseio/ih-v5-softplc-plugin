/**
 * devagent.js - объект, используется устройствами
 */

module.exports = {
  start(plugin) {
    this.plugin = plugin;
    this.commandsToSend = []; // массив для отправки на сервер
  },

  addCommandToSend(item) {
    this.commandsToSend.push(item);
  },

  sendCommands() {
    if (!this.commandsToSend.length) return;
    this.commandsToSend.forEach(item => {
      this.plugin.sendCommand(item);
    });
    this.commandsToSend = [];
    // "command":{"did":"d0027","act":"set", prop, value}
  }
};
