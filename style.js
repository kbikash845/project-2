let cel=document.getElementById("cel")
let fer=document.getElementById("fer")

cel.addEventListener("input",function(){
//   console.log("cel changed")
  let c=this.value;
  //  -------for converting celcius to farenhiet-----
  let f=(c *9/5) +32;
  if(!Number.isInteger(f)){
    f=f.toFixed(4);
  }
  fer.value=f
 

});

fer.addEventListener("input",function(){
    // console.log("fer creacted")
    let f=this.value;
    //==-----convering farenheit to celcius
    let c=(f-32)*5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    cel.value=c;
    
    
});