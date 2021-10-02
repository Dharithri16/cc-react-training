

   
   let values = ["green", "green", "red", "red",
     "yellow", "pink", "pink", "yellow"
   ];

   function unique(arr) {
   const u = arr.filter((value,index,arr) => arr.indexOf(value)=== index)
   return u
    
}
   
+(.)
   console.log("Unique values are", unique(values));
  
   