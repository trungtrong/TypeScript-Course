
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

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in the 
            ${this.department}`;
  }
}

let me =  new Employee('John', 'Sales');
me.getElevatorPitch();
//me.name;// Error 
