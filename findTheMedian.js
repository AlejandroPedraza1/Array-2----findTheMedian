//Examples
//findTheMedian([4,9,9,2,1,5]) → 5.5
//findTheMedian([1, 5, 3, 1 , 5]) → 3
//findTheMedian([10, 12, 15]) → 12

function findTheMedian(nums){
  let a = 0;
  let b = 0;
  let middle = nums.length / 2;

  if (nums.length == 1) {
      return nums[0];
    }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums.length % 2 == 0) {
      a+= nums[middle - 1];
      b+= nums[middle];
      return (a + b) / 2
    }
    else if (nums.length % 2 == 1) {
      middle = (middle - 0.5);
      return nums[middle];
    }
}
