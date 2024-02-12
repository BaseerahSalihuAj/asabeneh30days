let firstName = "Basirah"
let LastName = "Salihu"
let country = "Nigeria" 
let city = "Ilorin"
let age = 27;
let isMarried = true
// let year=2024
console.log(typeof(firstName));
console.log(typeof(LastName));
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isMarried));
// console.log(typeof(year));

let number="10"
let num = 10     
console.log(num===number)

let float = '9.8'
let check = 10
console.log( float === check);

let truth = 10>5;
let falsy = 10<5;
console.log(truth + " " + falsy);

console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false 
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') //false

console.log(4 > 3 && 10 < 12);  //  true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //  true
console.log(4 > 3 || 10 > 12);  //true
console.log(!(4 > 3));   //false
console.log(!(4 < 3));   //true
console.log(!(false));   //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));  //true
let on= "jagons, Python"
console.log(on.includes("on"));

const now = new Date()
console.log(now.getFullYear()) 
console.log(now. getMonth());
console.log(now);
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());