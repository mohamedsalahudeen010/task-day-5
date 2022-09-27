let arrayRot= function(arr,n){
    if(n>0){
    for(let i=1; i<=n;i++){
      arr.unshift(arr.pop());
      
    }
    }
    return arr;
};
console.log(arrayRot([1,2,8,6,9,5,7,4,5],5));