const addOne = (arr) => {

  for(let i = arr.length - 1; i > -1; i--) {
    if (arr[i] === 9) {
      arr[i] = 0;
    } else {
      arr[i]++;
      break;
    }
  }
  if (arr[0] === 0) {
    return [1, ...arr];
  }
  
  console.log(arr);
  return arr;
}

addOne([9,9,9]); // -> [1,0,0,0]