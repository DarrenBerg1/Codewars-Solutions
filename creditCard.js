// The formula verifies a number against its included check digit, which is usually appended to a partial account number to generate the full account number. This full account number must pass the following test:
// from the rightmost digit, which is the check digit, moving left, double the value of every other digit
// if product of this doubling operation is greater than 9 (e.g., 7 * 2 = 14), then sum the digits of the products (e.g., 10: 1 + 0 = 1, 14: 1 + 4 = 5).
// take the sum of all the digits
// if and only if the total modulo 10 is equal to 0 then the number is valid
//Account identifier:    5   5   4   1   8   0   8   9   2   3   7   9   5   2   4   0
// 2x every other digit:  10  5   8   1   16  0   16  9   4   3   14  9   10  2   8   0
// Summed digits over 10: 1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0
// Results summed:        1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0 = 70
// 1. Split & Reverse number & Double every other digit with loop
// 2. if number is greater than two push to a new aray
// */
function creditCard(num) {
    // Reverses Order
    let tempArr = []
    num = num.split("").reverse()
    num = num.map((element) => parseInt(element))
    // Multiplies Every other # by two
    for (let i = 1; i < num.length; i += 2) {
        tempArr.push(num[i - 1])
        tempArr.push(num[i] * 2)
    }
    // turn temp array into numbers & any number above 10 add it to its own digits
tempArr = tempArr.map(function(element){ if (element >= 10){return element.toString().split("").map((a) => parseInt(a)).reduce((a,b) => a+= +b)}return element})
//
    let answer = tempArr.reduce((a,b) => a + b)
    if (answer % 10 === 0){
return "This is a valid credit card!"
    } else return "This is NOT a valid credit card!"
}
console.log(creditCard(" 5541808923795240"))