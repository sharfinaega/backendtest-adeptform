function sumNumber(array) {
  let str = [];
  for (let i = 0; i < array.length; i++) {
    str.push(array[i].toString());
  }

  let num_reverse = [];
  for (let i = str.length - 1; i >= 0; i--) {
    let temp = "";
    for (let j = str[i].length - 1; j >= 0; j--) {
      temp = temp + str[i][j];
    }
    num_reverse.push(Number(temp));
  }

  let total = 0;
  for (let i = 0; i < num_reverse.length; i++) {
    total = total + num_reverse[i];
  }
  return total;
}

console.log(sumNumber([243, 564]));
