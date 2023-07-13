/*
example1:
str1="ABCABC",str2="ABC"
output:"ABC"
example2:
str1="ABABAB",str2
output:"AB"
str1="LEET",str2="CODE"
output:""
*/

var gcdOfStrings=function(str1,str2){
    let array=Array.from(str1);
    let array2=Array.from(str2);
    let len=array+array2;

    console.log(array);
    console.log(array2);


}

gcdOfStrings("ABCABC","ABC")