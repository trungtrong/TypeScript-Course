//          public 
/*
class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public eat() {
    console.log('eat');
  }
  public e() {

  }
}

class Rabbit extends Animal {
  public earLength: number;
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  public run() {
    console.log('run');
  }

  public eat() {
    super.eat();
    this.run();
  }
}

var rabbit = new Rabbit('white', 30);
console.log(rabbit.eat());
console.log(rabbit.name); */
/*
*
*/
//          Private
/*
class FooBase {
  public x: number;
  private y: number;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  private print() {
    console.log('print');
  }
}

var foo = new FooBase(1, 2);
foo.x;
foo.y; // Error
foo.print();// Error

class Child extends FooBase {
  // constructor is consistent,  is not affected by private
  // constructor is mandatory
  constructor(x: number, y: number) {
    super(x, y);
  }
}

var child = new Child(1, 3);
child.x;
child.y; // Error */
/*
*
*
*/
//            Protected
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in the \n            " + this.department;
    };
    return Employee;
}(Person));
var me = new Employee('John', 'Sales');
me.getElevatorPitch();
//me.name;// Error 
