// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }});
    }, { threshold: 0.1 });
    faders.forEach(el => io.observe(el));
  }

  // Inquire form → mailto
  const form = document.getElementById('inquire-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value;
      const email = form.querySelector('[name="email"]').value;
      const product = form.querySelector('[name="product"]').value;
      const message = form.querySelector('[name="message"]').value;
      const subject = encodeURIComponent(product === 'General Inquiry' ? 'General Inquiry' : `Inquiry: ${product}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProduct: ${product}\n\n${message}`);
      window.location.href = `mailto:southcoursellc@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
