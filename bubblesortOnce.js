/*
Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.



*/



function bubblesortOnce(a) {

  let result = [...a]
  
  for(let i = 0; i < result.length -1; i++){
    
    if(result[i] > result[i+1]){
     [result[i], result[i+1]] = [result[i+1], result[i]]
    }   
    
  }
  return result
}
console.log(bubblesortOnce([9,2,5,4,3,7,6]))