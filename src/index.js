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
      this.initial = this.solve();
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

  sumExpression (operation, num) {//Пощаем операцию и число в массив
    this.expression.push(operation, num);
  }

  solve () {
    var temp = [];
    for (var j = 0; j < this.expression.length; j++) {//Помещаем во временный массив
      temp.push(this.expression[j]);                 //  все выражение
    }

    var i = temp.length-1, tempanswer = 0;
    while (temp.length !== 1) {//С конца массива ищем знак степени(Приоритет 1)
      if (temp[i] === "**") {
        tempanswer = Math.pow(temp[i-1],temp[i+1]);
        temp.splice(i-1, 3, tempanswer);//Удаление из массива 3х элементов
        i = i + 2;                      //  с позиции i-1, замена первого
      }                                 //  элемента на tempanswer
    i--;
    if (i === 0) break;
    }

    i = 1;
    while (temp.length !== 1) {//С начала массива ищем знак деления(Приоритет 2)
      if (temp[i] === "/") {
        tempanswer = Math.round(temp[i-1] / temp[i+1]);
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }
      i++;
      if (i === temp.length-1) break;
    }

    i = 1;
    while (temp.length !== 1) {//С начала массива ищем знак умножения(Приоритет 3)
      if (temp[i] === "*") {
        tempanswer = temp[i-1] * temp[i+1];
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }
      i++;
      if (i === temp.length-1) break;
    }

    i = 1;
    while (temp.length !== 1) {//С начала массива ищем знак вычитания(Приоритет 4)
      if (temp[i] === "-") {
        tempanswer = temp[i-1] - temp[i+1];
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }
      i++;
      if (i === temp.length-1) break;
    }

    i = 1;
    while (temp.length !== 1) {//С начала массива ищем знак суммы(Приоритет 5)
      if (temp[i] === "+") {
        tempanswer = temp[i-1] + temp[i+1];
        temp.splice(i-1, 3, tempanswer);
        i = i - 2;
      }
      i++;
      if (i === temp.length-1) break;
    }
    return temp[0];
  }

  valueOf() {
    return this.initial;
  }

}
module.exports = SmartCalculator;
