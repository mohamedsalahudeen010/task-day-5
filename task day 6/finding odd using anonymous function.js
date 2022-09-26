let oddNumbers=[];
 let findingOdd=function (a){
     for (let i=0;i<a.length;i++){
         if (a[i]%2!==0){
            oddNumbers.push(a[i]); 
            
         } 
     }
    return oddNumbers
 }
 console.log(findingOdd([2,3,4,6,58,7,8,9]))