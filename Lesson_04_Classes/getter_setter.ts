class Point2 {
  private _x: number;
  private _y: number;

  constructor(_x: number, _y: number) {
    this._x = _x; 
    this._y = _y;
  }

  get x() {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }
}

let point = new Point2(3, 4);
// get
console.log(`x is ${point.x}`);
//set 
point.x = 5;
console.log(`x is ${point.x}`);