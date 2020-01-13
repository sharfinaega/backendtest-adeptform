const split = n => {
  const findDivisor = div => {
    if (n % div != 0) return div;
    return findDivisor(div + 1);
  };
  const arrLength = findDivisor(2);
  const base = Math.floor(n / arrLength);
  const difference = n - base * arrLength;

  let result = Array(arrLength).fill(base);
  result.splice(arrLength - difference, difference, ...Array(difference).fill(base + 1));

  console.log(arrLength);
  console.log(result.join(" "));
};
split(7);
