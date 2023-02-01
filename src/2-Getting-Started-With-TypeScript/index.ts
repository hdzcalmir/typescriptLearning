let x: number = 10;
let y: number = 15;
const sum: number = x + y;
const result: string = `The sum of ${x} and ${y} is ${sum}`;
console.log(result);

const output = document.querySelector('#output');

if (output) {
  output.innerHTML = result;
}
