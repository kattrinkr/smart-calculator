class SmartCalculator {
  constructor(initialValue) {
    this.initial = initialValue;
    this.expression = [];
    this.expression.push(initialValue);// your implementation
  }

  add(number) {// Сложение
    this.sumExpression("+", number)
    this.initial = this.solve();
    this.initial.valueOf();
    return this;

  }

  subtract(number) {// Вычитание
    this.sumExpression("-", number)
    this.initial = this.solve();
    this.initial.valueOf();
    return this;
  }

  multiply(number) {// Умножение
    this.sumExpression("*", number);
    this.initial = this.solve();
    this.initial.valueOf();
    return this;
  }

  devide(number) {// Деление
    this.sumExpression("/", number);
    if (number !== 0) {
      this.initial = this.solve(); //Math.round(this.initial / number);
      this.initial.valueOf();
      return this;
    }
    else return false;
  }

  pow(number) {// Степень
    this.sumExpression("**", number);
    for (var i = 1; i <= number; i++)
      this.initial = this.solve();
      this.initial.valueOf();
      return this;
  }

  sumExpression (operation, num) {
    this.expression.push(operation, num);
  //  console.log(this.expression);
  }

  solve () {
    var i = 1, tempanswer = 0;
    var temp = [];
    for (var j = 0; j < this.expression.length; j++){
      temp.push(this.expression[j]);
    }
  //  console.log(temp);
    while (temp.length !== 1){
      if (temp[i] === "**"){
        tempanswer = Math.pow(temp[i-1],temp[i+1]);
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }//console.log(temp);
      i++;
      if (i === temp.length-1) break;
    }
    i = 1;
    while (temp.length !== 1){
      if (temp[i] === "/"){
        tempanswer = Math.round(temp[i-1] / temp[i+1]);
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }
      i++;
      if (i === temp.length-1) break;
    }
    i = 1;
    while (temp.length !== 1){
      if (temp[i] === "*"){
        tempanswer = temp[i-1] * temp[i+1];
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }
      i++;
      if (i === temp.length-1) break;
    }//console.log(temp);

    i = 1;
    while (temp.length !== 1){
      if (temp[i] === "-"){
        tempanswer = temp[i-1] - temp[i+1];
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }
      i++;
      if (i === temp.length-1) break;
    }
    i = 1;
    while (temp.length !== 1){
      if (temp[i] === "+"){
        tempanswer = temp[i-1] + temp[i+1];
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }
      i++;
      if (i === temp.length-1) break;
    }//console.log(temp);

    return temp[0];
  }

  valueOf() {
    return this.initial;
  }

}



module.exports = SmartCalculator;
