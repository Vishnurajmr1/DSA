// nums=[3,0,1];
//output:2;
//nums=[0,1];
//output:2;

var missingNumber=function(nums){
    let n=nums.length;
    let expectedSum=(n*(n+1)/2);
    let actualSum=0;
    for(let i=0;i<n;i++){
        actualSum +=nums[i];
    }
    return expectedSum-actualSum;
}
console.log(missingNumber([0,1]));
