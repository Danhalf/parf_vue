function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  const es = document.querySelectorAll('.grid-item a');

  es.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem.preventDefault;
      console.log(elem);
    });
  });

  const frontSide = document.querySelectorAll('.front');
  const backSide = document.querySelectorAll('.back');

  frontSide.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('flipped');
    });
  });

  backSide.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('flipped');
    });
  });
});

// $('.back').click(function() {
//   $(this)
//     .parent()
//     .toggleClass('flipped');
// });
