document.addEventListener('DOMContentLoaded', () => {
// Mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
if (mobileMenu && navLinks) {
mobileMenu.addEventListener('click', () => {
const isOpen = navLinks.classList.toggle('active');
mobileMenu.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('active')));
}


// Acordeón: cerrar hermanos y hacer scroll suave
document.querySelectorAll('.accordion details').forEach(d => {
d.addEventListener('toggle', () => {
if (d.open) {
document.querySelectorAll('.accordion details').forEach(other => { if (other !== d) other.open = false; });
d.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}
});
});
});
