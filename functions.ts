function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  // This function has a return type of void as we're not returning anything
  console.log('Result: ' + num);
}

printResult(add(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5;

console.log(combinedValues(8, 8));

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!' });
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
});
