function animateOnScroll($target, animationClass){
  const documentTop = $(document).scrollTop();
  $target.each(() =>{
    const offset = $(this).offset()
    const itemTop = offset.top;
    if(documentTop > itemTop - 300) {
      $(this).addClass(animationClass)
    } else {
      $(this).removeClass(animationClass)
    }
  })
  console.log(documentTop)
}

$(document).scroll(() => {
  animateOnScroll(animationClass);
});
