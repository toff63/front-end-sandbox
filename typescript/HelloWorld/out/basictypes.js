// There are 3 basic types
var isDone = false;
var lines = 42;
var myName = "Anders";
// Without type declaration
var isNotDone = true;
var nbLines = 42;
var mySurnmae = "Anderson";
// The Any type as a default like in Scala
var notSure = 4;
notSure = "mybe a string instead";
notSure = false;
// const for constant
var numLivesForCat = 9;
//numLivesForCat = 1; // Compilation Error FTW :)
// Collections: typed array or generic arrays
var listTypedArray = [1, 2, 3];
var listGenericArray = [1, 2, 3];
listGenericArray = listTypedArray; // This works
// Readonly arrays
var roNumbers = listGenericArray;
//roNumbers[0] = 1; // Compilation fails as it is read only
// listTypedArray = roNumbers; // Fails because mutating methods are missing
// Enumerations
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// Type void specific for function returning nothing
function bigHorribleAlert() {
    alert("I'm a little annoying box!");
}
// String
var newName = 'Tyrone';
var greeting = "Hi " + newName + ", how are you?";
var multiline = "This is an example\nof a multiline string";
console.log(multiline);
if (state.type === "success") {
    console.log(state.value);
}
else if (state.type === "error") {
    console.error(state.message);
}
var Success = /** @class */ (function () {
    function Success(result) {
        this.result = result;
    }
    Success.prototype.map = function (f) {
        return new Success(f(this.result));
    };
    Success.prototype.flatMap = function (f) {
        return f(this.result);
    };
    return Success;
}());
var Failure = /** @class */ (function () {
    function Failure(errorMessager) {
        this.errorMessager = errorMessager;
    }
    Failure.prototype.map = function (f) {
        return this;
    };
    Failure.prototype.flatMap = function (f) {
        return this;
    };
    return Failure;
}());
var result = function (f, a) {
    try {
        return new Success(f(a));
    }
    catch (error) {
        return new Failure(error);
    }
};
//# sourceMappingURL=basictypes.js.map