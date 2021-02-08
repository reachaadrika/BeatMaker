window.addEventListener('load',() => {
    const s=document.querySelectorAll(".sound");
    const clicks=document.querySelectorAll(".clicks div");
//main sound

clicks.forEach((click,index) => {
  click.addEventListener('click',function(){
    s[index].currentTime=0;  
    s[index].play();
  })
})
})

