
let removeduplicate= function(arr){
    let original=[];
    let n = arr.length;
    
      for (let i=0; i<n; i++)
      {let count=0;
           for (let j= 0; j<n ; j++)
           {
               if (arr[i]===arr[j])
               {
                  count++ 
               }
           }
           if(count<2){
             original.push(arr[i])}
       }
       console.log(original);
   }
   duplicate([2,9,5,8,4,3,2]);