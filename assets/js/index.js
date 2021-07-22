// WELCOME ANIMATION
const whenLoadPage = 1900
const whenFinishLoadAnimation = whenLoadPage + 700
const whenFinishWelcomeAnimation = whenFinishLoadAnimation + 700

setTimeout(() => {
  const welcomeTitle = document.querySelector('.welcome-screen h1');
  welcomeTitle.classList.remove('tracking-in-expand')
  welcomeTitle.classList.add('tracking-out-contract')
}, whenLoadPage);

setTimeout(() => {
  const welcomeScreen = document.querySelector('.welcome-screen');
  welcomeScreen.classList.add('hidden-animation')
}, whenFinishLoadAnimation);

setTimeout(() => {
  const welcomeScreen = document.querySelector('.welcome-screen');
  welcomeScreen.classList.add('hidden')
}, whenFinishWelcomeAnimation);

// CARD ANIMATIONS AND PREVENT SUBMIT ON CARDS
const languageCards = document.querySelectorAll('.language-cards a');
const cards = document.querySelectorAll('.card');

cards.forEach(el => {
  el.setAttribute('data-aos', 'fade-up')
  el.setAttribute('data-aos-delay', '50')
  el.setAttribute('data-aos-duration', '600')
  el.setAttribute('data-aos-once', 'false')
})

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll)
  const wppButton = document.querySelector('.social-media');
  if(scroll >= 1600){
    wppButton.classList.add('hidden')
  } else {
    wppButton.classList.remove('hidden')
  }
});
