import { input } from './data';

let example = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
];

function calcDistance(input: string[]) {
  let forwardTotal = 0;
  let depthTotal = 0;
  for (let i = 0; i < input.length; i++) {
    const [command, distance] = input[i].split(' ');
    if (command === 'forward') {
      forwardTotal += +distance;
    }
    if (command === 'up') {
      depthTotal -= +distance;
    }
    if (command === 'down') {
      depthTotal += +distance;
    }
  }
  return forwardTotal * depthTotal;
}

console.log(`example : ${calcDistance(example)}`);
console.log(`input : ${calcDistance(input)}`);
