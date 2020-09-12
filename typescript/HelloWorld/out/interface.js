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
// Object that implements the Person interface
// Can be treated as a Person since it has the name and move properties
var p = { name: "Bobby", move: function () { } };
// Objects that have the optional property:
var validPerson = { name: "Bobboy", age: 42, move: function () { } };
// Is not a person because age is not a number
var invalidPerson /*: Person*/ = { name: "Booby", age: true, move: function () { } };
// Only parameters' types are important, names are not important.
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
// Classes - members are public by default
var Point = /** @class */ (function () {
    // Constructor - the public / private keywords in this context will generate
    // the boiler plate code for the property and the initialization in the constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    Point.prototype.dist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
    // Static memebers
    Point.origin = new Point(0, 0);
    return Point;
}());
// Implement interfaces to help compiler spoting missing properties
var PointPerson = /** @class */ (function () {
    function PointPerson() {
    }
    PointPerson.prototype.move = function () { };
    return PointPerson;
}());
var p1 = new Point(10, 20);
console.log(p1.x);
var p2 = new Point(15); // y will be 0
// Inheritance
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    // Overwrite
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Point));
var p3 = new Point3D(10, 20, 2);
var p4 = { name: 'Tyron', age: 42 };
//p4.age = 25; // Compilation error
var p5 = { name: 'Tyron', age: 42 }; // No type declaration 
var p6 = p5; // Ok, read-only alias for p5
//p6.age = 25; // Compilation error
p5.age = 25; // Ok but also change p6.age because of aliasing
var Car = /** @class */ (function () {
    function Car(make, model) {
        if (make === void 0) { make = "Unknown make"; }
        if (model === void 0) { model = "Unknown model"; }
        // Assignment permitted in constructor
    }
    return Car;
}());
var car = new Car("Wolswagen", "Golf");
//# sourceMappingURL=interface.js.map