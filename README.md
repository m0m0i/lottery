# 宝くじ抽選機 (Weighted Picker)
一等賞、二等賞、三等賞、はずれ など、それぞれの出現率を考慮して抽選を行います。

## インプットデータ / Input
配列のかたちでそれぞれの賞の本数を渡します。
[1, 10, 100, 10000]
index 0 => 一等賞の本数
index 1 => 二等賞の本数
index 2 => 三等賞の本数
index 3 => ハズレの本数

The function takes an array of the numbers of each prize as an input.
[1, 10, 100, 10000]
index 0 => The number of the first prize
index 1 => The number of the second prize
index 2 => The number of the third prize
index 3 => The number of 🤪

## アウトプットデータ / Output
当選結果をインデックスで返します。

Return the index of the input.

## 複雑性分析 / Time & Space Complexities
単純検索アルゴリズ: linearPicker() => Time O(N) | Space O(N)
二分探索アルゴリズム: bsPicker() => Time O(logN) | Space O(N)

Linear Search: linearPicker() => Time O(N) | Space O(N)
Binary Search: bsPicker() => Time O(logN) | Space O(N)

## テスト / Test
const inputA = [1, 3, 9]
const inputB = [1, 1]
const inputC = [1, 10, 100, 10000]
const inputD = []

const fortunePickerA = new WeightedPicker(inputA)
const fortunePickerB = new WeightedPicker(inputB)
const fortunePickerC = new WeightedPicker(inputC)
const fortunePickerD = new WeightedPicker(inputD)

console.log(fortunePickerA.linearPicker())
console.log(fortunePickerA.linearPicker())
console.log(fortunePickerA.linearPicker())
console.log(fortunePickerA.linearPicker())
// example: 2, 2, 1, 0
// 1/13 の確率で 0, 3/13 の確率で 1, 9/13 の確率で 2

