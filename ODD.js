/**
 * This is an implentation of ODD(OneDigitDifference)Number program
 */

//initialization of min and max numbers
let min = 0
let max = 10000000

let count = 0
/**
 * This is a differnce function to check the difference between the digits of a number.
 * @param {Number} i giving a number to check that number is ODD or not.
 * @returns boolean if the difference between each digit of a number is 1
 * then it returns true to the calling function.
 */
function difference(i){
    if (i<10){
        return false
    }
    let str = i.toString()
    for (let j = 0; j < str.length - 1; j++){
        if (Math.abs(Number(str[j]) - Number(str[j+1])) != 1){
            return false
        }

    }
    return true
}
/**
 * This is helper function to check prime numbers
 *@param {Number} to check the given number is prime.
 *@returns {boolean} if the number is prime then it returns true else 
 *it returns false.
 */
function Prime(n){
    if (n <= 1) 
    return false; 

// Check from 2 to n-1 
for (let i = 2; i < n; i++) 
    if (n % i == 0) 
        return false; 

return true; 
} 

/**
 *This is a helper function to check each and every number between 0 and 
 * 10 million 
 */
function testing(){


for (let i = min; i < max; i++) {
        if (difference(i) == true){
        ODDlist.push(i);
        count++
        }
    }

    console.log("Total ODD numbers :", count);
}

/**
 * this is hepler function 
 */
let ODDlist = [];
function testprime(){
    let primecount = 0; 
    for (let i = 0; i < ODDlist.length; i++) {
        if (Prime(ODDlist[i])) {
            primecount++;
        }
    }
    console.log("Total prime numbers in ODD list:", primecount);
} 

/**
 * this main function to call the helping functions
 */
function main(){
    testing()
    testprime()
}
main()
