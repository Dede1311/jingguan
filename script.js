function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  var el = document.getElementById('page-' + id);
  if (el) {
    el.classList.add('active');
    window.scrollTo(0, 0);
  }
}
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}
document.addEventListener('DOMContentLoaded', function() {
  showPage('home');
});
