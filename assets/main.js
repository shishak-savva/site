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
    }, 500 / 50);
  });
});

const links = document.getElementById('links-list');

document.addEventListener('click', (e) => {
  if (e.target.className?.includes('head') || e.target?.parentElement?.className?.includes('head')) {
    if (links.classList.contains('head__links_open')) {
      links.classList.remove('head__links_open');
    } else {
      links.classList.add('head__links_open');
    }
  } else {
    links.classList.remove('head__links_open');
  }
});

document.getElementById('skills__toggle_open').addEventListener('click', () => {
  document.getElementById('skills').classList.remove('skills_closed');
});

document.getElementById('skills__toggle_close').addEventListener('click', () => {
  document.getElementById('skills').classList.add('skills_closed');
});
