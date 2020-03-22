module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenth = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    let currentNumber = number.toString().split('');
    let strNumber = '';
    let numberLength = currentNumber.length;

    if ( numberLength  == 1) {
        strNumber += numbers[currentNumber[0]];
    } else if ( numberLength  == 2) {
        if (currentNumber[0] == 1) {
            strNumber += `${teens[currentNumber[1]]}`;
        } else {
            strNumber += `${tenth[currentNumber[0] - 2]}`;
            if (currentNumber[1] != 0) {
                strNumber += ` ${numbers[currentNumber[1]]}`;
            }
        }
    } if ( numberLength  == 3) {
        strNumber += `${numbers[currentNumber[0]]} hundred`; 

        if ( currentNumber[1] == 0 && currentNumber[2] != 0) {
            strNumber += ` ${numbers[currentNumber[2]]}`;
        } else if ( currentNumber[1] == 1) {
            strNumber += ` ${teens[currentNumber[2]]}`;
        } else if (currentNumber[1] > 1) {
            strNumber += ` ${tenth[currentNumber[1] - 2]}`;

            if (currentNumber[2] > 0) {
                strNumber += ` ${numbers[currentNumber[2]]}`;
            }
        }
    }
    

    return strNumber;
}