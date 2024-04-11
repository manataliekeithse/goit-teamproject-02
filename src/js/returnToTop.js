const mybutton = document.querySelector('.back-to-top');
mybutton.addEventListener('click', topFunction);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

export function topFunction() {
  

  document.body.scrollIntoView({
    behavior: 'smooth',
  });
}
