let titlecase = function (string){
    let words=string.toLowerCase().split(" ");
    for (let i=0;i<words.length;i++){
        words[i]=words[i][0].toUpperCase() +words[i].slice(1);
        
    }
    words=words.join(" ")
  return words ;    
    
};
console.log(titlecase("i went to shop to buy some snacks"));