var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (num) {
        return num;
    };
    return Employee;
}());
var emp = new Employee(1, 'Steve');
emp.getSalary(1); //*/
/*
*
*
*/
/*
interface Clock {
  new (hour: number, minute: number);
}

interface ClockInter {
  tick(): void;
}

class ClockIm implements Clock {
  currentTime: Date;
  constructor(hour: number, mimute: number){}
  tick() {
    console.log('a');
  }
}

let ana = new ClockIm(1, 1); */
/*
*
*
*/ 
