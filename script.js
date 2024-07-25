let count =document.getElementById("countdown")
 let fn = (cb)=>{
  setTimeout(() => {
   
    cb(count.textContent )
    
  }, 2000);
 }
 fn( ()=>{
  count.textContent = count.textContent - 1
  setTimeout((cb) => {
    count.textContent = count.textContent - 1
    setTimeout((cb) => {
      count.textContent = count.textContent - 1
      setTimeout((cb) => {
        count.textContent = count.textContent - 1
        setTimeout((cb) => {
          count.textContent = count.textContent - 1
          setTimeout((cb) => {
            count.textContent = count.textContent - 1
            setTimeout((cb) => {
              count.textContent = count.textContent - 1
              
              setTimeout((cb) => {
                count.textContent = count.textContent - 1
                setTimeout((cb) => {
                  count.textContent = count.textContent - 1
                  setTimeout((cb) => {
                    count.textContent = count.textContent - 1
                    setTimeout((cb) => {
                      count.textContent = "Happy Independence Day"
                    }, 1000);
                    
                  }, 1000);
                  
                }, 1000);
                
              }, 1000);
            }, 1000);
            
          }, 1000);
        }, 1000);
        
      }, 1000);
    }, 1000);
 
  }, 1000);
 
 
 
 } 

)




 