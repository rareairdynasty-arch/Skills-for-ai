// Mobile menu, before/after sliders and footer year.

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 52.0625rem)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

document.querySelectorAll('[data-compare]').forEach((frame) => {
  const range = frame.querySelector('input[type="range"]');
  if (!range) return;
  const update = () => {
    frame.style.setProperty('--pos', `${range.value}%`);
    range.setAttribute('aria-valuetext', `${range.value}% after`);
  };
  range.addEventListener('input', update);
  update();
});

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
