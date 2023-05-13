/*There is a function signFunc(x)that returns:
1 if x is postive.
-1 if x is negative.
0 if x is equal to 0. 
*/

var arraySign = function(nums) {
    let product=1;
    for(let i=0;i<nums.length;i++){
        product=product*nums[i];
    }
    return signFunc(product);
};

var signFunc=function(product){
    if(product>0){
        return 1;
    }else if(product<0){
        return -1;
    }else{
        return 0;
    }
}

console.log(arraySign([-1,-2,-3,-4,3,2,1]));