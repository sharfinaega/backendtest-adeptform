// function reverse(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[i + 1] > arr[j + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

function reverse(arr) {
  if (arr.length <= 1) return arr;
  const oddIndexes = arr.filter((value, index) => {
    if (index % 2 == 0) {
      return value;
    }
  });
  const evenIndexes = arr.filter((value, index) => {
    if (index % 2 == 1) {
      return value;
    }
  });
  const maxLength = oddIndexes.length > evenIndexes.length ? oddIndexes.length : evenIndexes.length;
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    if (evenIndexes[i]) {
      result.push(evenIndexes[i]);
    }
    if (oddIndexes[i]) {
      result.push(oddIndexes[i]);
    }
  }
  return result;
}

console.log(reverse([4, 5, 6, 7, 8]));
