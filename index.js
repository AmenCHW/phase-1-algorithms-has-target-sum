function hasTargetSum(array, target) {
  for(let i = 0; i< array.length; i++){
    for (let j= i + 1; j<array.length; j++){
      if (array[i]+array[j] === target){
        return true
      }
    }
  }
  return false
}

/* 
 0(n power 2)
*/

/* 
  // create  a loop to inside a loop
  // sum the value of the elemnts from each loop
  // compare the values to the target number
*/

/*
  we compared the sum of two numbers in the array to the target an dreturn true if it was equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("hasTargetSum([2,2, 4, 3, 1], 4)", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
