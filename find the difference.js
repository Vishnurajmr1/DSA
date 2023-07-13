var findTheDifference=function(s,t){
    let string=new Set(s);
    let string2=new Set(t);
    let length=s.length+t.length;
    let char;
    

    for(let i=0;i<length;i++){
        if(s[i]!==t[i]){
            char=t[i];
        }
    } 
    return char;
};
console.log(findTheDifference("abcd","abcde"));

