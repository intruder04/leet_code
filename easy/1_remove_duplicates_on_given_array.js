
let nums = [1, 2, 3, 1, 4, , 2, 3, 4, 4, 4, 4, 4];

const removeDuplicates = (nums) => {
  let resultLength = null;
  for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 1);
        i -= 1;        
      } 
      resultLength = i;
  }
  return resultLength + 1;
};

const removeDuplicatesWhile = (nums) => {
  const storage = {}
  let index = nums.length - 1

  while (index >= 0) {
    if (nums[index] && !storage[nums[index]]) {
      storage[nums[index]] = true
    } else {
      nums.splice(index, 1);
    }
    index -= 1
  }
  return nums
}

console.time('timer');
console.log('while loop -', removeDuplicatesWhile(nums));
console.timeEnd('timer');

console.time('timer');
console.log('for loop -', removeDuplicates(nums));
console.timeEnd('timer');

