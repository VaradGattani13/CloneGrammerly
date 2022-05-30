const charval=document.getElementById("textarea");
let totalcha=document.getElementById("totalchar");
let remainingchar=document.getElementById("remainingchar");
let userchar=0;



// updating countrt
const upcou=()=>{
    userchar=charval.value.length;
    
    totalcha.innerText=userchar;
    remainingchar.innerText=200-userchar;

}




charval.addEventListener("keyup",()=>upcou());



const copytext = () => {
    charval.select();
    charval.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(charval.value);
  };