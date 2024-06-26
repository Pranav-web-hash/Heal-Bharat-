document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    document.querySelector('.navlist').style.display-="none"
    document.querySelector('.nav').style.display="block"
  });
});
