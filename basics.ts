function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2; // Necessary as returning phrase + n1 + n2 would result in the number types being converted to strings

  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

// const number1: number = 5; assigning types to the variable is not considered best practice
// However, if you don't initialize the variable right away, then adding the type is best practice
// let number1: number;
const number1 = '5';
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'result is: ';

add(+number1, +number2, printResult, resultPhrase);
