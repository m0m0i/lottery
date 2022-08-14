class WeightedPicker {
  constructor(array) {
    if (array.length < 1)
      return new Error(`PLEASE PUT SOME PRIZE IN YOUR PICKER`);

    this.prefixSums = [];

    let prefixSum = 0;
    for (const weight of array) {
      prefixSum += weight;
      this.prefixSums.push(prefixSum);
    }
  }

  linearPicker() {
    const target = Math.random() * this.prefixSums[this.prefixSums.length - 1];

    for (let idx = 0; idx < this.prefixSums.length; idx += 1) {
      if (this.prefixSums[idx] > target) return idx;
    }
  }

  bsPicker() {
    const target = Math.random() * this.prefixSums[this.prefixSums.length - 1];

    let low = 0;
    let high = this.prefixSums.length - 1;
    while (low < high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (target > this.prefixSums[mid]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }
}

//  テスト / Test
const inputA = [1, 3, 9];
const inputB = [1, 1];
const inputC = [1, 10, 100, 10000];
const inputD = [];

const fortunePickerA = new WeightedPicker(inputA);
const fortunePickerB = new WeightedPicker(inputB);
const fortunePickerC = new WeightedPicker(inputC);

console.log(" ----- Picker A results ----- ");
console.log(fortunePickerA.linearPicker());
console.log(fortunePickerA.linearPicker());
console.log(fortunePickerA.linearPicker());
console.log(fortunePickerA.linearPicker());

console.log(" ----- Picker B results ----- ");
console.log(fortunePickerB.linearPicker());
console.log(fortunePickerB.linearPicker());
console.log(fortunePickerB.linearPicker());
console.log(fortunePickerB.linearPicker());

console.log(" ----- Picker C results ----- ");
console.log(fortunePickerC.linearPicker());
console.log(fortunePickerC.linearPicker());
console.log(fortunePickerC.linearPicker());
console.log(fortunePickerC.linearPicker());

console.log(" ----- Picker D results ----- ");
console.log(new WeightedPicker(inputD)); // ERROR
