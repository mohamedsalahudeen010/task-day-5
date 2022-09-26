
let median= function (arr1,arr2){
    
    let concatarr=arr1.concat(arr2);
    concatarr=concatarr.sort((a,b)=>(a-b));
    let length=concatarr.length;
    if(length%2!==0){
        console.log(concatarr[(length/2)-0.5]);
    }
    else {
        console.log((concatarr[length/2]+concatarr[length/2]-1)/2);
    }
  };
  
  median([2,3,6,4,8,9],[5,8,7,9,6])