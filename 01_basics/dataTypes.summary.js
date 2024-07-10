
// ***********Primitive**********

// 7 types: String, Number , Boolean, Null, undefiened, symbol, bigInt.


// Immutability: Once a primitive value is created, it cannot be altered. Operations on primitives create new values rather than modifying the original value.
// Copy by Value: When a primitive data type is assigned to a variable or passed as an argument, its value is copied.

// let x = 10;       // Number
// let y = x;        // y is now a copy of x
// x = 20;           // Changing x does not affect y
// console.log(x);   // 20
// console.log(y);   // 10

// let str1 = "Hello";  // String
// let str2 = str1;     // str2 is now a copy of str1
// str1 = "World";      // Changing str1 does not affect str2
// console.log(str1);   // World
// console.log(str2);   // Hello




// *********Reference(Non-primtive)***********

// Array , objects, funcations 


// Object: A collection of key-value pairs.
// Array: A special type of object that stores ordered collections of values.
// Function: Objects that can be invoked or called.

// Mutability: Non-primitive values can be changed. Modifying a reference type affects the original value.
// Copy by Reference: When a non-primitive data type is assigned to a variable or passed as an argument, a reference to the same memory location is copied.


let obj1 = { a: 1, b: 2 };  // Object
let obj2 = obj1;            // obj2 is a reference to obj1
obj1.a = 3;                 // Changing obj1 affects obj2
console.log(obj1.a);        // 3
console.log(obj2.a);        // 3

let arr1 = [1, 2, 3];       // Array
let arr2 = arr1;            // arr2 is a reference to arr1
arr1.push(4);               // Changing arr1 affects arr2
console.log(arr1);          // [1, 2, 3, 4]
console.log(arr2);          // [1, 2, 3, 4]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive DataType) and Heap(Non-Primitive DataType) Memory

