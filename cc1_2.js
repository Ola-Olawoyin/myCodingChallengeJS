//Coding challenge 1&2
// let massJohn = 92;
// let heightJohn = 1.95;
// let heightMark = 1.69;
// let massMark = 78;

// let BMIJohn = massJohn/ heightJohn**2;
// let BMIMark = massMark/ heightMark**2;

// let markHigherBMI = BMIMark > BMIJohn

// console.log (BMIJohn, BMIMark);
// console.log(markHigherBMI)


//  massJohn = 85;
//  heightJohn = 1.76;

//  heightMark = 1.88;
//  massMark = 95;

//  BMIJohn = massJohn/ heightJohn**2;

//  BMIMark = massMark/ heightMark**2;

// markHigherBMI = BMIMark > BMIJohn

// console.log (BMIJohn, BMIMark);
// console.log(markHigherBMI)

// if(BMIMark>BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
// }
// else
// console.log(`Mark's BMI (${BMIJohn}) is higher than John's (${BMIMark})`)

//Coding challenge 3
// let noOfScore = 3;
// let dophineScore1 = 97;
// let dophineScore2 =112;
// let dophineScore3 = 101;
// let dolphinAverageScore = (dophineScore1+dophineScore2+dophineScore3)/noOfScore


// let koalasScore1 = 109;
// let koalasScore2 = 95;
// let koalasScore3 = 106;
// let koalasAverageScore = (koalasScore1+koalasScore2+koalasScore3)/noOfScore

// console.log(koalasAverageScore, dolphinAverageScore)

// if(koalasAverageScore>dolphinAverageScore)
// {
//     console.log(`Koalas team wins with average score: ${koalasAverageScore}!`)
// }
// else if(koalasAverageScore<dolphinAverageScore)
// {
//     console.log(`Dolphin team wins with average score: ${dolphinAverageScore}!`)
// }
// else
// {
// console.log(`Both Dophin and Koalas have the average score ${dolphinAverageScore}, it's a draw!`)
// }

// if(koalasAverageScore>dolphinAverageScore && koalasAverageScore>=100)
// {
//     console.log(`Koalas team wins with average score: ${koalasAverageScore}!`)
// }
// else if(dolphinAverageScore>koalasAverageScore && dolphinAverageScore>=100)
// {
//     console.log(`Dolphin team wins with average score: ${dolphinAverageScore}!`)
// }
// else if(dolphinAverageScore===koalasAverageScore && dolphinAverageScore>=100)
//  {
//  console.log(`Both Dophin and Koalas have the average score ${dolphinAverageScore}, it's a draw!`)
//  }
// else
// {
// console.log(`Both Dophin and Koalas have average scores  ${dolphinAverageScore} and ${koalasAverageScore} which is less than 100, and therefore there is no winner!`)
// }

//Coding Challenge 4

const bill = 40;
let tip;

console.log(`the bill is £${bill} and the tip is £${bill>=50 && bill <=300 ? tip = bill*0.15 : tip = bill * 0.2} therefore the total amount payable is £${bill+tip}`);
//console.log(bill, tip);

console.log(`The bill was £${bill}, the tip was £${tip} and the total value £${bill+tip}`)



