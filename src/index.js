class SmartCalculator {
  constructor(initialValue) {
    this.init = initialValue;
  }

  add(number) {
    this.init = `${this.init} + ${number}`;
    return this;
  }
  
  subtract(number) {
    this.init = `${this.init} - ${number}`;
    return this;
  }

  multiply(number) {
    this.init = `${this.init} * ${number}`;
    return this;
  }

  devide(number) {
    this.init = `${this.init} / ${number}`;
    return this;
  }

  pow(number) {
    this.init = `${this.init} ** ${number}`;
    return this;
  }
  
  valueOf() {
    return eval(this.init);
  }
}

module.exports = SmartCalculator;
