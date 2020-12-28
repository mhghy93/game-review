export function uniqueArray(arr) {
  let uniqueArr = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(',')) {
      temp = arr[i].split(',');
      uniqueArr.push(temp[0]);
      uniqueArr.push(temp[1]);
    } else {
      uniqueArr.push(arr[i]);
    }
  }
  uniqueArr = uniqueArr.filter(
    (item, index) => uniqueArr.indexOf(item) === index
  );
  return uniqueArr;
}
