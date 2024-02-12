// let base =+prompt("Enter value for base");
// let height =+prompt("Enter value for height");
// let Area= 5.0* base*height;
// console.log( `area of Triangle is ${Area}`);

// let a = +prompt("Enter Value for a");
// let b = +prompt("Enter Value for b");
// let c = +prompt("Enter Value for c");
// let perimeter= a+ b+ c
// console.log( `perimeter of Triangle is ${perimeter}`);

// let length = prompt("length")
// let width = prompt("width")
// let areaOfRectange = Number(length) * Number(width);
// let perimeterOfRectangle = 2 * (Number(length) + Number(width))
// alert(`the areaOfRectange is ${areaOfRectange}`)
// alert(` the perimeterOfRectangle is ${perimeterOfRectangle}`)

const pi =3.14
let radius = +prompt("Enter Value for radius");
let areaOfcircle = pi * radius * radius
console.log(areaOfcircle);
let circumferenceOfcircle = 2  * pi * radius
console.log(circumferenceOfcircle);
console.log(`the area of the circle is ${areaOfcircle} the circumference is ${circumferenceOfcircle}`)

let userWorkHour = +prompt("Enter your work hour");
let userWorkRate = +prompt("Enter your work rate every hour");
let userWeeklyEarning = +(userWorkHour * userWorkRate);
console.log(`Your weekly earning is ${userWeeklyEarning}`);

let Myname="Basirah"
let Valuelength = (Myname.length)
console.log(Myname.length);
let nameLength = (Valuelength>=7? "the name is long" : "the name is short"  )
console.log(nameLength);

let firsName = 'Basirah'
let lasName = 'Anifowose'
if(firsName.length >= lasName.length){
    console.log(`Your first name, ${firsName} is longer than your family name, ${lasName}`);
}else{
    console.log(`Your first name, ${firsName} is shorter than your family name, ${lasName}`);

 }

let myAge = 250
let yourAge = 25
let actualAge = myAge - yourAge;
console.log(`I am ${actualAge} years older than you`);

let  agee = prompt("Enter your age in years")
const seconds = agee * 60 * 60 * 24 * 365 ;
alert(`You lived ${seconds} seconds`);

let dateNow = new Date();
year = dateNow.getFullYear();
month = dateNow.getMonth();
date = dateNow.getDate();
hour = dateNow.getHours();
minutes = dateNow.getMinutes();

console.log(`${year}-${month+1}-${date} ${hour}:${minutes}`);
console.log(`${date}-${month+1}-${year} ${hour}:${minutes}`);
console.log(`${date}/${month+1}/${date} ${hour}:${minutes}`);


