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
      item.parentNode.classList.add('flipped');
    });
  });

  backSide.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.parentNode.classList.add('flipped');
    });
  });
});

// $('.back').click(function() {
//   $(this)
//     .parent()
//     .toggleClass('flipped');
// });
