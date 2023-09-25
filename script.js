var typed = new Typed('#typed-text',{
    strings : ['Are You Ready!'],
    typeSpeed  : 120,
    backSpeed : 40,
    loop : true
});



// Scroll to specific values
// scrollTo is the same
// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//   });
  
//   // Scroll certain amounts from current position 
//   window.scrollBy({ 
//     top: 100, // could be negative value
//     left: 0, 
//     behavior: 'smooth' 
//   });
  
//   // Scroll to a certain element
//   document.querySelector('.body').scrollIntoView({ 
//     behavior: 'smooth' 
//   });



  // Scroll To Top
  let scrollBtn=document.getElementsByClassName("scrollToTop")[0];
  scrollBtn.addEventListener("click",()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })