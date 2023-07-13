//nums=[3,2,1];
//output:1;
//nums=[1,2];
//output:2;
//nums=[2,2,3,1];
//output:1;

var thirdMax = function(nums) {
    let right=nums.length;
    console.log(right);
    let left=0;
    for(let i=0;i<right;i++){
        return nums[right-i-1];
    }
};
console.log(thirdMax([5,2,2]));