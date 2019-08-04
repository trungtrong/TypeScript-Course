///*
interface IEmploy {
  empCode: number;
  name: string;
  getSalary(num: number) :number;
}

class Employee implements IEmploy {
  empCode: number;
  name: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.name = name;
  }

  getSalary(num: number): number {
    return num;
  }
}

let emp = new Employee(1, 'Steve');
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