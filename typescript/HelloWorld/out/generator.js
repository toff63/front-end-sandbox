// Iterators and Generators
// for..of statement
// iterate over the list of values oin the object being iterated
var arrayOfAnyType = [1, "string", false];
for (var _i = 0, arrayOfAnyType_1 = arrayOfAnyType; _i < arrayOfAnyType_1.length; _i++) {
    var val = arrayOfAnyType_1[_i];
    console.log(val); // 1, "string", false
}
// for..in
for (var index in arrayOfAnyType) {
    console.log(index); // 0, 1, 2
}
//# sourceMappingURL=generator.js.map