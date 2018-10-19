function myMap(arr, cb) {
  const result = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    const item = arr[i];
    result.push(cb(item, i, arr));
  }
  return result;
}

function myFilter(arr, cb) {
  const result = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (cb(item, i, arr)) {
      result.push(item);
    }
  }
  return result;
}

const result = myMap([1,3,4,5], (el, i, arr) => {
  return el + i;
});

const filtered = myFilter([12, 22, 322, 21], (el) => {
  return el % 2 == 0;
})

console.log(filtered);
