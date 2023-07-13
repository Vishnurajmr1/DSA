var containsNearbyDuplicate = function(nums, k) {
    let j=1;
    for(let i=0;i<=nums.length-1;i++){
        console.log(i,j);
        if(nums[i]===nums[j]){
            console.log(nums[j]);
            if(Math.abs(i-j)<=k){
                console.log(Math.abs(i-j));
                return true;
            }
        }else{
            j++;
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3))