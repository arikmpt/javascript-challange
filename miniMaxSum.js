// Explanation

// Sum everything except 1, the sum is 14.
// Sum everything except 2, the sum is 13.
// Sum everything except 3, the sum is 12.
// Sum everything except 4, the sum is 11.
// Sum everything except 5, the sum is 10

function miniMaxSum(arr) {
    // Write your code here
    let sumArr = []
    arr.forEach((v, i) => {
        let tempArr = arr.filter((value, index) => index !== i)
        sumArr.push(tempArr.reduce((a,b) => a + b))
    })

    console.log(`${Math.min(...sumArr)} ${Math.max(...sumArr)}`)
}


console.log([1,2,3,4,5])
