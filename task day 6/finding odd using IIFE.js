let oddNumbers=[];
 (function findingOdd(a){
     for (let i=0;i<a.length;i++){
         if (a[i]%2!==0){
            oddNumbers.push(a[i]); 
         }
     }  console.log(oddNumbers)
 })([2,3,4,6,58,7,8,9])