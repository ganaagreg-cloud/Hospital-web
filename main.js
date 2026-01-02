(function () {
  const btn = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Simple “toast” for demo forms
  const forms = document.querySelectorAll('form[data-demo]');
  forms.forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Хүсэлт амжилттай илгээгдлээ. (Demo)');
      f.reset();
    });
  });
})();
