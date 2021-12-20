import { input } from './data';

let example = [
  0b00100, 0b11110, 0b10110, 0b10111, 0b10101, 0b01111, 0b00111, 0b11100,
  0b10000, 0b11001, 0b00010, 0b01010,
];

function calcGamma(input: number[], index: number) {
  if (
    input.filter((number) => number & Math.pow(2, index)).length >=
    input.length / 2
  ) {
    return '1';
  } else {
    return '0';
  }
}

function buildString(input: number[], indexes: number) {
  let output = '';
  for (let i = 0; i < indexes; i++) {
    output = calcGamma(input, i) + output;
  }
  return output;
}

let gammaExample = parseInt(buildString(example, 5), 2);
let epsilonExample = ~gammaExample & 0b11111;

console.log(
  `example : gamma: ${gammaExample} epsilon: ${epsilonExample} power: ${
    gammaExample * epsilonExample
  }`,
);

let gamma = parseInt(buildString(input, 12), 2);
let epsilon = ~gamma & 0b111111111111;

console.log(
  `input : gamma: ${gamma} epsilon: ${epsilon} power: ${gamma * epsilon}`,
);
