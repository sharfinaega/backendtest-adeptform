function lucky7(n) {
  if (n < 7 || n > 10000) {
    console.error("Input has to be greater than or equal to 7 and less than or equal to 10000");
    return;
  }

  // Since at least we need 2 items in the array,
  // we can assume it's safe to start number from the mean number
  let mean = Math.ceil(n / 2);

  // the difference between first item and last item is always 1
  let lastItem = mean,
    firstItem = lastItem - 1;
  let k = [firstItem, lastItem];
  if (firstItem + lastItem === n) {
    output(k);
    return;
  }
  let remaining = n - (firstItem + lastItem);
  while (remaining > 0 && firstItem > 0) {
    if (remaining - lastItem >= 0) {
      remaining -= lastItem;
      k.push(lastItem);
    } else if (remaining - firstItem >= 0) {
      remaining -= firstItem;
      k.push(firstItem);
    }
    if (remaining == 0) {
      output(k);
      return;
    }
    if (remaining < firstItem) {
      lastItem = firstItem;
      firstItem--;
      remaining = n - (firstItem + lastItem);
      k = [firstItem, lastItem];
    }
  }
  return;
}

function output(k) {
  console.log(k.length);
  console.log(
    k
      .sort((a, b) => {
        return a - b;
      })
      .join(" ")
  );
}

// Try with any number
lucky7(7);
