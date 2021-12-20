import { input } from './data';

let example = [
  0b00100, 0b11110, 0b10110, 0b10111, 0b10101, 0b01111, 0b00111, 0b11100,
  0b10000, 0b11001, 0b00010, 0b01010,
];
function mostCommonBit(input: number[], index: number): number[] {
  // console.log(`mcb iteration ${index + 1}`);
  // console.log(input.map((x) => x.toString(2).padStart(5, '0')));
  if (index > -1) {
    if (
      input.filter((number) => number & Math.pow(2, index)).length >=
      input.length / 2
    ) {
      return mostCommonBit(
        input.filter((number) => number & Math.pow(2, index)),
        index - 1,
      );
    } else {
      return mostCommonBit(
        input.filter((number) => !(number & Math.pow(2, index))),
        index - 1,
      );
    }
  } else {
    return input;
  }
}

const oxyGenEx = mostCommonBit(example, 4)[0];
const oxyGen = mostCommonBit(input, 11)[0];

function leastCommonBit(input: number[], index: number): number[] {
  // console.log(`lcb iteration ${index + 1}`);
  // console.log(input.map((x) => x.toString(2).padStart(5, '0')));
  if (index > -1 && input.length > 1) {
    if (
      input.filter((number) => number & Math.pow(2, index)).length <
      input.length / 2
    ) {
      return leastCommonBit(
        input.filter((number) => number & Math.pow(2, index)),
        index - 1,
      );
    } else {
      return leastCommonBit(
        input.filter((number) => !(number & Math.pow(2, index))),
        index - 1,
      );
    }
  } else {
    return input;
  }
}

const co2scrubEx = leastCommonBit(example, 4)[0];
const co2scrub = leastCommonBit(input, 11)[0];

// console.log(oxyGenEx * co2scrubEx);
console.log(`oxyGen: ${oxyGen}`);
console.log(`co2scrub: ${co2scrub}`);

console.log(`ans: ${oxyGen * co2scrub}`);
