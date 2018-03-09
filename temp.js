class SmartCalculator {
  constructor(initialValue) {
    this.initial = initialValue;
    this.expression = [];
    this.expression.push(initialValue);// your implementation
  }

  add(number) {// Сложение
    this.sumExpression("+", number)
    this.initial = this.solve();
    //this.initial.valueOf();
    return this;

  }

  subtract(number) {// Вычитание
    this.sumExpression("-", number)
    this.initial = this.solve();
  //  this.initial.valueOf();
    return this;
  }

  multiply(number) {// Умножение
    this.sumExpression("*", number);
    this.initial = this.solve();
  //  this.initial.valueOf();
    return this;
  }

  devide(number) {// Деление
    this.sumExpression("/", number);
    if (number !== 0) {
      this.initial = this.solve(); //Math.round(this.initial / number);
    //  this.initial.valueOf();
      return this;
    }
    else return false;
  }

  pow(number) {// Степень
    this.sumExpression("**", number);
    for (var i = 1; i <= number; i++)
      this.initial = this.solve();
  //    this.initial.valueOf();
      return this;
  }

  sumExpression (operation, num) {
    this.expression.push(operation, num);
    console.log(this.expression);
  }

  solve () {
    var temp = [];
    for (var j = 0; j < this.expression.length; j++){
      temp.push(this.expression[j]);
    }
    console.log(temp);
    var i = temp.length-1, tempanswer = 0;
    while (temp.length !== 1){
      if (temp[i] === "**"){
        tempanswer = Math.pow(temp[i-1],temp[i+1]);
        temp.splice(i-1, 3, tempanswer);
        i = i + 2;
      }console.log(temp);
      i--;
      if (i === 0) break;
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
    }console.log(temp);

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
    }console.log(temp);

    console.log(temp);
  }

  priority(temp) {
  }

  answer(output){
}

  valueOf() {
    return this.initial;
  }

}

const calculator = new SmartCalculator(7);
const value = calculator
/* .add(5)
   .add(5)
  .multiply(5)
  .add(5);*/
/* .add(50)
  .multiply(2)
  .add(44)
  .pow(1)
  .add(5)
  .multiply(1)
  .multiply(2);*/
/*  .pow(2)
  .multiply(1)
  .pow(1)
  .multiply(1); */
/* .add(2)
  .add(2)
  .multiply(2);*/
//  .add(5);
/*  .multiply(1)
  .pow(1)
  .subtract(8)
  .add(84)
  .subtract(12)
  .add(20)
  .subtract(95)
  .subtract(72)
  .multiply(2)
  .subtract(77);*/
  .pow(1)
  .subtract(25)
  .subtract(40)
  .pow(1)
  .pow(2)
  .pow(2)
  .multiply(1)
  .subtract(9);
