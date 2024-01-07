///////------1------/////

// //Create an empty object user.
// let user = {}; 
// // Add the property name with the value John.
// user.name = "John";      
// // Add the property surname with the value Smith.    
// user.surname = "Smith"; 
// // Change the value of the name to Pete.      
// user.name = "Pete";  
// // Remove the property name from the object.         
// delete user.name;
// // print solution     
// console.log(user.name);


////////--------2-------/////

// let schedule = {};
// console.log(isEmpty(schedule)); 

// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); 

// function isEmpty(obj) {
//     for (let key in obj) {
//         // If at least one property is found, return false
//         return false; 
//     }
//     // If no properties are found, return true
//     return true; 
// }


///////------3-----///////

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let employee in salaries){
    sum += salaries[employee];
}
 console.log(sum); 

////////--------4------------//////
  
// let calculator = {
//     a: 0,
//     b: 0,
//     read: function() {
//         this.a = +prompt(0, 5);
//         this.b = +prompt(0, 10);
//     },
//     sum: function() {
//         return this.a + this.b;
//     },
//     mul: function() {
//         return this.a * this.b;
//     }
// };

// calculator.read();
// alert("Sum: " + calculator.sum());
// alert("Product: " + calculator.mul());

