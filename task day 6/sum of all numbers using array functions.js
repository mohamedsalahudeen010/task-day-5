let sumofArray =(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum 
}
console.log(sumofArray([2,3,5,4,6,8,7]));