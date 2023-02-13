/*

# 1. Write a method TO_ROMAN, TO_ROMAN takes in INPUT_NUMBER (an arabic number)
# 2. Create a OUTPUT string, set to ''
# 3. Create a ROMAN_NUMERAL_TO_ARABIC_MAP that includes roman numerals as keys, arabic numbers as values
# 4. Iterate over ROMAN_NUMERAL_TO_ARABIC_MAP, keep track of ROMAN_NUMERAL and ARABIC_NUMBER
# 5. Set EVENLY_DIVISIBLE_TIMES = INPUT_NUMBER / ARABIC_NUMBER:
# 6. If EVENLY_DIVISIBLE_TIMES >= 1
  # 6a. Append ROMAN_NUMERAL to OUTPUT EVENLY_DIVISIBLE_TIMES
  # 6b. Subtract ARABIC_NUMBER from INPUT_NUMBER EVENLY_DIVISIBLE_TIMES
# 7. Return OUTPUT

*/




// function convertToRomanNumeral(num){

//   let romanNumeral = "";

//   while( num > 0){
//     if(num <= 4){
//       romanNumeral += "I";
//       num -= 1
//     }else if(num === 4){
//       romanNumeral += "IV";
//       num -= 4
//     }else if(num >= 5 && num <= 9){
//       romanNumeral += "V";
//       num -= 5
//     }else if(num >= 10 && num < 50){
//       romanNumeral += "X";
//       num -= 10
//     }else if(num >= 50 && num < 100){
//       romanNumeral += "L";
//       num -= 50
//     }else if(num >= 100 && num < 500){
//       romanNumeral += "C";
//       num -= 100
//     }else if(num >= 500 && num < 1000){
//       romanNumeral += "D";
//       num -= 500
//     }else if(num >= 1000 && num < 3000){
//       romanNumeral += "M";
//       num -= 1000
//     }



//   }


// return romanNumeral;





// }
// console.log(convertToRomanNumeral(2343))


exports.toRoman = function(num) {

// let romanNumerals = {
// 1:  'I',
// 4: 'IV',
// 5: 'V',
// 9: 'IX',
// 10: 'X',
// 40: 'XL',
// 50: 'L',
// 90: 'XC',
// 100: 'C',
// 400: 'CD',
// 500: 'D',
// 900: 'CM',
// 1000: 'M'
// };


let numeralConverted = '';
const romanNumeralArray = Object.keys(romanNumerals).reverse();
//console.log(romanNumeralArray)

romanNumeralArray.forEach(key => {
  while(key <= num){
    numeralConverted += romanNumerals[key];
    num -= key;
  }


});

return numeralConverted;

};
console.log(convertToRoman(999))