'use strict';


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

// const bill = 40;
// let tip;

// console.log(`the bill is £${bill} and the tip is £${bill>=50 && bill <=300 ? tip = bill*0.15 : tip = bill * 0.2} therefore the total amount payable is £${bill+tip}`);
// //console.log(bill, tip);

// console.log(`The bill was £${bill}, the tip was £${tip} and the total value £${bill+tip}`)

//Coding Challenge 5

//calcAverage arrow function

const calcAverage = (score1, score2, score3) => {

    const average = (score1 + score2 + score3) / 3

    return average;

};

let averageDolphins = calcAverage(23, 34, 27);

let averageKoalas = calcAverage(85, 54, 41);


const checkWinner = function (avgDolphin, avgKoalas) {


    if (avgDolphin >= avgKoalas * 2) {
        return console.log(`Dolphin wins (${avgDolphin} vs. ${avgKoalas})`)
    }
    else if ((avgKoalas >= avgDolphin * 2)) {
        return console.log(`Koalas wins  ${avgKoalas} vs.${avgDolphin}`)
    }
    else {
        return console.log(`No winner has emerged, condition for a winner to emerge not met`)
    }

}

checkWinner(averageDolphins, averageKoalas);


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height:1.69,

    calcBMI:function(){
        this.bmi = this.mass/this.height**2

        return this.bmi
    }   
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height:1.95,

    calcBMI:function(){
        this.bmi = this.mass/this.height**2

        return this.bmi
    }
}

john.calcBMI();
mark.calcBMI();

if(john.bmi>mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s  BMI (${mark.bmi})!`)
}

else if(mark.bmi>john.bmi)
{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`)
}
else
{
   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is same with ${john.fullName}'s BMI (${john.bmi})`)
}





