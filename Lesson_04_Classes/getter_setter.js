var Point2 = /** @class */ (function () {
    function Point2(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point2;
}());
var point = new Point2(3, 4);
// get
console.log("x is " + point.x);
//set 
point.x = 5;
console.log("x is " + point.x);
