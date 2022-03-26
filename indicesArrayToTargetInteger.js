/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:
Input: nums = [2,3,4], target = 6
Output: [0,2]
Explanation: Because nums[0] + nums[2] == 6, we return [0, 2].
Example 2:
Input: nums = [11,7,15,2], target = 9
Output: [1,3]
Example 3:
Input: nums = [], target = 6
Output: []
*/
 
function solution(nums, target)  {
    for(let i=0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return []
}

console.log(solution([2,3,4], 9))