/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;



age = 32;

if (age >= votingAge) {
    console.log("True")
} else {
    console.log("False")
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let variableA = 5;
const variableB = 2;

if (variableA > variableB) {
    variableA++;
} else {
    console.log("Not today")
}

console.log(variableA);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
const stringConversion = parseInt(1999, 10);

console.log(stringConversion);




//Task d: Write a function to multiply a*b 
function multiply(a,b) {
    console.log(a * b);
}
multiply(2,2);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYearsAge() {
    return Math.round(age / 7)
}

console.log(dogYearsAge())


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) 
//and returns the number of pounds of raw food to feed in a day.

function dailyFood (dogWeight, dogAge) {
    
    if (dogAge >= 1 && dogWeight <= 5) {
        return dogWeight * .05;
    } 
    else if (dogWeight > 5 && dogWeight < 11) {
        return dogWeight * .04;
    }
    else if (dogWeight > 10 && dogWeight < 16) {
        return dogWeight * .03;
    }
    else if (dogWeight > 15 && dogAge >= 1){
        return dogWeight * .02;
    }
    //Above is the code which returns values for dogs above 1 year in age. Below is for those younger than 1 year.
    else if (dogAge < 1 && dogAge > .5833) {
        return dogWeight * .04;
    }
    else if (dogAge < .5833 && dogAge > .3333) {
        return dogWeight * .05;
    }
    else if (dogAge < .3333 && dogAge > .1666) {
        return dogWeight * .1
    }



}

console.log(dailyFood(15,1))

// feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - 
// if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you 
//have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


function kilosToMiles(kilometers) {
    const conversion = .621371;
    return kilometers * conversion;
}
console.log(kilosToMiles(10))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(feet) {
    const conversion = 30.48;
    return feet * conversion;
}
console.log(feetToCm(2))



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





