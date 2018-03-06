class SmartCalculator {
  constructor(initialValue) {
    this.initial = initialValue;// your implementation
  }

  add(number) {// Сложение
    this.initial = this.initial + number;
    this.initial.valueOf();
    return this;
  }

  subtract(number) {// Вычитание
    this.initial = this.initial - number;
    this.initial.valueOf();
    return this;
  }

  multiply(number) {// Умножение
    this.initial = this.initial * number;
    this.initial.valueOf();
    return this;
  }

  devide(number) {// Деление
    if (number !== 0) {
      this.initial = Math.round(this.initial / number);
      this.initial.valueOf();
      return this;
    }
    else return false;
  }

  pow(number) {// Степень
    for (var i = 1; i <= number; i++)
      this.initial = this.initial * this.initial;
      this.initial.valueOf();
      return this;
  }

  valueOf(){
    return this.initial;
  }


}

module.exports = SmartCalculator;
