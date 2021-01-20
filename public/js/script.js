let el = document.querySelector(".main-text-line3");
let texts=["STUDENTS","FAMILY","KIDS","VEGANS","FITNESS FREAKS"];
let pg1=document.querySelector(".bg-photo");
let header=document.querySelector(".header");
let i = 0,j=0;

window.addEventListener("load",function(){
    interval();
    window.addEventListener("scroll",function(){
        let {bottom}=pg1.getBoundingClientRect();
        // console.log(bottom);
        if(bottom<=0){
            header.classList.add("fixed");
        }
        else{
            if(header.classList.contains("fixed")){
                header.classList.remove("fixed");
            }
        }
    })
})
let interval = function(){
    
    if(j<texts[i].length){
        el.innerHTML+=texts[i].charAt(j);
        j++;
        if(j==texts[i].length){
            j++;
            setTimeout(interval,2000);
        }
        else{
            setTimeout(interval,50);
        }
    }
  else if(j>texts[i].length && j<2*texts[i].length+1){
      let txt=el.innerHTML;
      el.innerHTML=texts[i].substring(0,txt.length-1);
      j++;
      setTimeout(interval,30);
  }else{
      i++;
      if(i>=texts.length){
          i=0;
      }
      j=0;
      interval();
  }
}


// interval();
