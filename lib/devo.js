/**
 * devo.js - обертка для устройства при работе с ним в плагине
 * Пока только setValue, нужно будет и другие команды
 */

module.exports = class Devo {
  constructor(item, agent) {
    this.did = item.did;
    this.dn = item.dn;
    this.agent = agent;
  }

  setValue(prop, value) {
    this.agent.addCommandToSend({ did: this.did, act: 'set', prop, value });
    // "command":{"did":"d0027","act":"set", prop, value}
  }
};
