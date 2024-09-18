//without default parameters

function noDefaultParam(number) {
  console.log("Result: ", number * number);
}

noDefaultParam(); //Nan

//adding a default parameter

function withDefaultParam(number = 10) {
  console.log("Result: ", number * number);
}

withDefaultParam(); //100

class NoDefaultParams {
  constructor(num1, num2, num3, string1, bool1) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}

//passing a false bool value

var fail = new NoDefaultParams(1, 2, 3, false);
console.log("after fail instance");
fail.calculate();

//class with default params

class WithDefaultParams {
  constructor(num1, num2, num3, string1 = "Result", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}

var better = new WithDefaultParams();
console.log("after better instance");
better.calculate();
