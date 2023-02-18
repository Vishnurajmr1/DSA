// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//example 1:
// Input:nums=[2,7,11,15]
// target=9;
// Expected output=[0,1]

const nums=[2,7,11,15];
let target=9

function twoSum(nums,target){//get nums array and target to find the position of numbers
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){//inner loop to travse the one index from i;
            if(nums[i]+nums[j]==target){ //used to check the target is equal to the sum of numbers
                return [i,j];//return the index of two numbers sum is found equal to index
            }
        }
    }
}
console.log(twoSum(nums,target))