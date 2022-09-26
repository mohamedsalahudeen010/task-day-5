let prime = (function(arr){
    let isprime=[];
for (let i=0;i<arr.length;i++){
    let count =0;
   for (let j=1 ; j<=arr[i] ;j++){
      if(arr[i]%j===0){
          count++;
    }   
    }
        if(count<=2){
    isprime.push(arr[i]);
 }
      
}
    console.log(isprime)
})([1,28,5,3,7,6,5,25,5,9,8])
 

