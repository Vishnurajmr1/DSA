

function factorial(num){
    return num===0?1:num*factorial(--num)
}


console.log(factorial(3));