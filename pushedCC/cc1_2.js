//Test Data 1
let massJohn = 92;
let heightJohn = 1.95;
let heightMark = 1.69;
let massMark = 78;

let BMIJohn = massJohn/ heightJohn**2;
let BMIMark = massMark/ heightMark**2;

let markHigherBMI = BMIMark > BMIJohn

console.log (BMIJohn, BMIMark);
console.log(markHigherBMI)


//  massJohn = 85;
//  heightJohn = 1.76;

//  heightMark = 1.88;
//  massMark = 95;

//  BMIJohn = massJohn/ heightJohn**2;

//  BMIMark = massMark/ heightMark**2;

// markHigherBMI = BMIMark > BMIJohn

// console.log (BMIJohn, BMIMark);
// console.log(markHigherBMI)

if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
}
else
console.log(`Mark's BMI (${BMIJohn}) is higher than John's (${BMIMark})`)

