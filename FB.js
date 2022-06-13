/**
 * Библиотека функциональных модулей
 */

class Sum {
  constructor(first, last, step) {
    this.first = first;
    this.last = last;
    this.step = step;
    this.reset();
  }

  reset() {
    this.Q = this.first;
  }

  next() {
    this.Q += this.step;
    if (this.Q > this.last) this.reset();
  }
}

module.exports = {
  Sum
};
