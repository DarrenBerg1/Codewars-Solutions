/*
P- we have on parameter, our function will take in a numerical value (this will represent the index at which we will return a fibonacci number)
R- we will return the FIBONACCI number that correlates with the input value (index)
E- fibArray = [0,1,1,2,3,5,8] num = 4 we will return 3
P-
I will need to create an empty array that I can push my fibonacci numbers into.
I wil then need to create a for loop, that will loop n amount of times 
I will then need to return the number that the loops ends on
*/

function fibonacci(num){

let fibArray = [0,1];

for(let i = 2; i < num; i++){

  fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
  fibArray.push(i)
}

return fibArray//[num]

}
console.log(fibonacci(12))