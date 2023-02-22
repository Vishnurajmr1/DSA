//program to check the given number is palindrome or not
//eg:x=121 check from left to right of the number and if it is 
//same return true else return false

function ispalindrome(x) {
    const str=x.toString();
    
    for(let i=0;i<Math.floor(str.length)/2;i++){
        if(str[i]!==str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(ispalindrome(-121));