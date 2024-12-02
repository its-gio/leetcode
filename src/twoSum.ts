export const twoSum = function(nums: number[], target: number): number[] {
  // loop through nums (i)
  // loop through to check every option (j)
  // check if value is equal to target
  // return if true
  let answer: number[] = []
  const numsLength =  nums.length

  for (let i = 0; i < numsLength; i++) {
      for (let j = i + 1; j < numsLength; j++) {
          if (target === nums[i] + nums[j]) {
              return answer = [i, j]
          }
      }
  }

  return answer
};