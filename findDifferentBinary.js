function OffBinary(strArr) { 
    let changes = 0;
    Number(strArr[0]).toString(2).split('').forEach((digit, i)=>{
      if (digit != strArr[1].charAt(i)) changes++;         
    });
    return changes;
}

console.log(OffBinary(["5624", "0010111111001"]))