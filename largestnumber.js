//input :nums[10,2];
//output:"210"

var largestNumber=function(nums){
    nums.sort((num1,num2)=>{
        let sort1=num1.toString();
        let sort2=num2.toString();
        return parseInt(sort1+sort2)>parseInt(sort2+sort1)?-1:1;
    })
    if(nums[0]===0)return '0';

    return nums.join('');
}

console.log(largestNumber([10,2]));
