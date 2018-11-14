let nums = [0,0,1,1,1,2,2,3,3,4];

const removeDuplicates = (nums) => {
  let resultLength = null;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 1);
        i -= 1;        
      } 
      resultLength = i;
  }
  return resultLength + 1;
};

console.log('length -', removeDuplicates(nums));

console.log('nums -', nums);

// ===================

let arr = [0,0,1,1,1,2,2,3,3,4];

const removeDuplicates2 = (arr) => {
  const obj = {};
  let len = arr.length;
  let i = 0;

  while (i <= len) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      i += 1;
    } else {
      arr.splice(i, 1);
      len -= 1;
    }
  }
}

