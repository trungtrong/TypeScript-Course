class Point1 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point1) {
    return new Point1(this.x + point.x, this.y + point.y);
  }
}

class Point3D extends Point1 {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  add(point: Point3D) {
    var point2D = super.add(point);
    return new Point3D(point2D.x, point2D.y,  this.z + point.z);
  }
}

var p4 = new Point3D(1, 2, 3);
var p5 = new Point3D(4, 3, 2);
var p6 = p4.add(p5);
console.log(p6.x, p6.y, p6.z);