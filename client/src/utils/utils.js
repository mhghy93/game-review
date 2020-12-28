export function uniqueArray(arr) {
  let uniqueArr = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(',')) {
      temp = arr[i].split(',');
      for (let j = 0; j < temp.length; j++) {
        uniqueArr.push(temp[j]);
      }
    } else {
      uniqueArr.push(arr[i]);
    }
  }
  uniqueArr = uniqueArr.filter(
    (item, index) => uniqueArr.indexOf(item) === index
  );
  return uniqueArr;
}
