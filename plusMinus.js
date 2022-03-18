// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let zero = 0;
    let negative = 0;
    
    arr.map(v => {
        if(v > 0) {
            positive += 1;
        }
        
        if(v < 0) {
            negative += 1;
        }
        
        if( v == 0) {
            zero += 1;
        }
    })
    let positiveRatio = positive / arr.length;
    let negativeRatio = negative / arr.length;
    let zeroRatio = zero / arr.length;
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}


plusMinus([-4, 3, -9, 0, 4, 1])