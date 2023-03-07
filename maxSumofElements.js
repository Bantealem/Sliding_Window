let maxSumOfElement = (arr,p) => {
  let maxSum=0;
  let currentSum = 0;

  // Calculate sum of the three elements 

  for(let i= 0; i<p; i++){
    currentSum += arr[i]
  }
  maxSum = currentSum;

  // Calculate sum of elemnts greater thenan or equal to p


  for(let i=p; i<arr.length; i++){
    currentSum += arr[i] - arr[i-p] 
    if(currentSum > maxSum ){
        maxSum = currentSum;
    }
  }
  return maxSum;
}

let arr = [2,4,6,1,-2,9,0]
let p = 3
let result  = maxSumOfElement(arr,3)
console.log(result)