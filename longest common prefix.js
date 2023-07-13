/*input :strs["flower","flow","flight"];
output:fl;
input:strs["dog","racecar","car"];
output:"";
input :strs["","",""];
output:"";
*/

var longestCommonPrefix=function(strs){
    let newString={};
    for(let i=0;i<strs.length;i++){
        console.log(strs.length);
        newString=strs[i];
    }
    return newString;
}

console.log(longestCommonPrefix(["flower","flow"]));
