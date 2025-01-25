// Two Sum problem checks to see if there are two numbers that add up to a specific target.
// Using Two Point
export const twoSum = function (
  nums: number[],
  target: number
): number[] | null {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] + nums[right] === target) return [left, right];
    if (nums[left] + nums[right] > target) right--;
    if (nums[left] + nums[right] < target) left++;
  }

  return null;
};

// export const twoSum = function (nums: number[], target: number): number[] {
//   let answer: number[] = [];
//   const numsLength = nums.length;

//   for (let i = 0; i < numsLength; i++) {
//     for (let j = i + 1; j < numsLength; j++) {
//       if (target === nums[i] + nums[j]) {
//         return (answer = [i, j]);
//       }
//     }
//   }

//   return answer;
// };
