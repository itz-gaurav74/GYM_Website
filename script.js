var typed = new Typed('#typed-text',{
    strings : ['Are You Ready!'],
    typeSpeed  : 120,
    backSpeed : 40,
    loop : true
});

  // Scroll To Top
  let scrollBtn=document.getElementsByClassName("scrollToTop")[0];
  scrollBtn.addEventListener("click",()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })