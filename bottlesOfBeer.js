/*
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one doçwn and pass it around, 96 bottles of beer on the wall.
96 bottles of beer on the wall, 96 bottles of beer.
Take one down and pass it around, 95 bottles of beer on the wall.
95 bottles of beer on the wall, 95 bottles of beer.
Take one down and pass it around, 94 bottles of beer on the wall.
94 bottles of beer on the wall, 94 bottles of beer.
Take one down and pass it around, 93 bottles of beer on the wall.
93 bottles of beer on the wall, 93 bottles of beer.
Take one down and pass it around, 92 bottles of beer on the wall.
92 bottles of beer on the wall, 92 bottles of beer.
Take one down and pass it around, 91 bottles of beer on the wall.
91 bottles of beer on the wall, 91 bottles of beer.
Take one down and pass it around, 90 bottles of beer on the wall.
...
...
...
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

write a function that can print the song 99 bottles of beer.

P- we will have one parameter, which will be the number of times we count (99 -> 0)
R- we will return a concatenated string which counts down to 0. Once the count reaches 0, we will return the final paragraph shown above.
E- Example is above.
P-

we will want to use a while loop, while num >= 0 -- do this.
then we will use a conditional statement to cover edge cases, such as bottles -> bottle. 

*/


function bottlesOfBeer(num){
let word = "bottles"

  for(let i = num; i > -1; i--){
    if(i >= 1){
      if(i === 1){
        word = "bottle"
      }
          console.log(`${i} ${word} of beer on the wall, ${i} ${word} of beer.`)
      if(i - 1 === 1){
        word = "bottle"
      }else{
        word = "bottles"
      }
          console.log(`Take one down and pass it around, ${i-1} ${word} of beer on the wall.`)
  }else if(i === 0 ){    
    if(num === 1){
      word = "bottle"
    }
    console.log(`No more bottles of beer on the wall, no more bottles of beer.
    Go to the store and buy some more, ${num} ${word} of beer on the wall.`)


    }
  }
    
/*
all numbers > 1 = bottles -->  99 bottles of beer on the wall, 99 bottles of beer.

at 1 --> bottle 

once we hit 0 --> No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

at 2, for second half of sentence --> we change bottles to bottle. -> Take one down and pass it around, 91 bottle of beer on the wall.

at 1, revert back to bottles

*/



    
    // if(i === 0){
    //   console.log(`Take one down and pass it around, no more ${word} of beer on the wall. No more ${word} of beer on the wall, no more ${word} of beer. Go to the store and buy some more, ${num} ${word} of beer on the wall.`)
    // }
    // else if(i === 1){
    //   let word = 'bottle'
    //   console.log(`${i} ${word} of beer on the wall, ${i} ${word} of beer. 
      
    //   Take one down and pass it around, ${i-1} ${word} of beer on the wall.`)
    // }
    // else if(i > 1){
    //   console.log(`${i} ${word} of beer on the wall, ${i} ${word} of beer. Take one down and pass it around, ${i-1} ${word} of beer on the wall.`)
    // }
  }


console.log(bottlesOfBeer(1))


















// function bottlesOfBeer(num){
// let word = 'bottles'
//   for(let i = num; i >= 2; i--){    
//       console.log(`${i} ${word} of beer on the wall, ${i} ${word} of beer. Take one down and pass it around, ${i-1} ${word} of beer on the wall.`)
    
//     if(i === 2){
//       console.log(`1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. \nNo more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${num} bottles of beer on the wall.`)
//     }
//   }

// }
// console.log(bottlesOfBeer(5))

// function bottlesOfBeer(num){
// let result = [];

// while(num > 2){
//   result.push(`${num} bottles of beer on the wall, ${num--} bottles of beer.`,
//   `Take one down and pass it around, ${num} bottles of beer on the wall.`)

//   if(num == 2){
//   result.push('2 bottles of beer on the wall, 2 bottles of beer.',
//   'Take one down and pass it around, 1 bottle of beer on the wall.',
//   '1 bottle of beer on the wall, 1 bottle of beer.',
//   'Take one down and pass it around, no more bottles of beer on the wall.',
//   'No more bottles of beer on the wall, no more bottles of beer.',
//   `Go to the store and buy some more, 99 bottles of beer on the wall.`)
//   } 
// }
// return result;

// }
// console.log(bottlesOfBeer(9))



