// Interfaces are structural, anything that has the properties is compliant with the interface
interface Person {
    name: string;
    // optional properties, marked with a "?"
    age?: number;
    // And of course functions
    move(): void;
}

// Object that implements the Person interface
// Can be treated as a Person since it has the name and move properties
let p: Person = { name: "Bobby", move: () => { } };
// Objects that have the optional property:
let validPerson: Person = { name: "Bobboy", age: 42, move: () => { } };
// Is not a person because age is not a number
let invalidPerson /*: Person*/ = { name: "Booby", age: true, move: () => { } }

// Interface can also describe a function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// Only parameters' types are important, names are not important.
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
    return src.search(sub) != -1;
}

// Classes - members are public by default
class Point {
    // Properties
    x: number;

    // Constructor - the public / private keywords in this context will generate
    // the boiler plate code for the property and the initialization in the constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported
    constructor(x: number, public y: number = 0) {
        this.x = x;
    }

    dist() { return Math.sqrt(this.x * this.x + this.y * this.y); }

    // Static memebers
    static origin = new Point(0, 0);
}

// Implement interfaces to help compiler spoting missing properties
class PointPerson implements Person {
    name: string
    move() { }
}

let p1 = new Point(10, 20);
console.log(p1.x);
let p2 = new Point(15); // y will be 0

// Inheritance
class Point3D extends Point {
    constructor(x: number, y: number, private z: number = 0) {
        super(x, y); // Explicit call to the super class constructor is mandatory
    }

    // Overwrite
    dist() {
        let d = super.dist();
        return Math.sqrt(d * d + this.z * this.z);
    }
}
let p3 = new Point3D(10, 20, 2);
// console.log(p3.z); Compilation failure as z is private

// READONLY: new Feature in TypeScript 3.1
interface RPerson {
    readonly name: string;
    readonly age: number;
}

var p4: RPerson = { name: 'Tyron', age: 42 };
//p4.age = 25; // Compilation error

var p5 = { name: 'Tyron', age: 42 }; // No type declaration 
var p6: RPerson = p5; // Ok, read-only alias for p5
//p6.age = 25; // Compilation error
p5.age = 25; // Ok but also change p6.age because of aliasing

class Car {
    readonly make: string;
    readonly model: string;
    readonly year: 2018;

    constructor(make: string = "Unknown make", model: string = "Unknown model") {
        // Assignment permitted in constructor
    }
}

let car = new Car("Wolswagen", "Golf");