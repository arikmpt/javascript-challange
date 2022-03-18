//this function will return true if find space between a to b is 3 chars or b to a is 3 chars once

function checkAB(str) {
    // you can only write your code here!
    let arr = str.replace(/\s+/g, '').split("");
    let result = false;
    
    if(arr.find((v) => v == 'a') && arr.find((v) => v == 'b'))
    {
        for(i=0; i < arr.length; i++) {
            if(arr[i] == "a" || arr[i] == "b") {
                if(arr[i + 3] == "b") {
                    result = true;
                    break;
                }
                if(arr[i + 3] == "a") {
                    result = true;
                    break;
                }
            }
        }
    }

    return result;
}

  // TEST CASES
  console.log(checkAB("lane borrowed")); // true
  console.log(checkAB("make a cake")); // false
  console.log(checkAB("i am sick")); // false
  console.log(checkAB("you are boring")); // true
  console.log(checkAB("barbarian")); // true
  console.log(checkAB("bacon and meat")); // false
  console.log(checkAB("bus and meat")); // true