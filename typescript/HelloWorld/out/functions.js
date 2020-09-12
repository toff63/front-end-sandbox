// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use the type inference
// The following are equivalent, the same signature will be inferred by the compiler, and the same
// javascript will be emitted
// Full description
var f1 = function (i) { return i * i; };
// Return type inferred
var f2 = function (i) { return i * i; };
// Fat arrow syntax
var f3 = function (i) { return i * i; };
// Fat arrow with inferred returned type
var f4 = function (i) { return i * i; };
// Fat arrow with inferred returned type. No braces which implies that no return is needed
var f5 = function (i) { return i * i; };
//# sourceMappingURL=functions.js.map