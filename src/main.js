document.querySelectorAll('.head__link').forEach((element) => {
  element.addEventListener('click', () => {
    const to = element.getAttribute('to');

    const target = document.getElementById(to);

    const range = (target.offsetTop - 20) - document.body.scrollTop;

    const stepSize = range / 50;
    let count = 0;

    const id = setInterval(() => {
      document.body.scrollBy(0, stepSize);

      if (count === 50) {
        clearInterval(id);
      } else {
        count++;
      }
    }, 300 / 50);
  });
});

const btn = document.getElementById('links-btn');
const links = document.getElementById('links-list');

document.addEventListener('click', (e) => {
  if (e.target.className?.includes('head') || e.target?.parentElement.className?.includes('head')) {
    if (links.classList.contains('head__links_open')) {
      links.classList.remove('head__links_open');
    } else {
      links.classList.add('head__links_open');
    }
  } else {
    links.classList.remove('head__links_open');
  }
})

// if (btn && links) {
//   btn.addEventListener('click', () => {
//     console.log('click');

//     if (links.classList.contains('head__links_open')) {
//       links.classList.remove('head__links_open');
//     } else {
//       links.classList.add('head__links_open');
//     }
//   });
// }