// Iterators and Generators

// for..of statement
// iterate over the list of values oin the object being iterated
let arrayOfAnyType = [1, "string", false];
for (const val of arrayOfAnyType) {
    console.log(val); // 1, "string", false
}

// for..in
for (const index in arrayOfAnyType) {
    console.log(index); // 0, 1, 2
}