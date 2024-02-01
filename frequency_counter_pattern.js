// same([1,2,3],[4,1,9]);
// same([1,2,3],[1,9]);


function same(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        let j=0;
        if(arr1[i]*2===arr2[j]){
            arr2.splice(arr1[i],1);
        }
        if(arr2.length==0){
            return true;
        }
    }
    return false;
}

console.log(same([1,2,3],[1,9]))