setTimeout(() => {
  const welcomeTitle = document.querySelector('.welcome-screen h1');
  welcomeTitle.classList.remove('tracking-in-expand')
  welcomeTitle.classList.add('tracking-out-contract')
  setTimeout(() => {
    const welcomeScreen = document.querySelector('.welcome-screen');
    welcomeScreen.classList.add('hidden-animation')
    setTimeout(() => {
      const welcomeScreen = document.querySelector('.welcome-screen');
      welcomeScreen.classList.add('hidden')
    }, 700)
  }, 700)
}, 1900)


