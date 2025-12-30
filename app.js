// Click handlers for cards
function openPage(page) {
  switch(page) {
    case 'therapists':
      alert('Open Therapist List');
      break;
    case 'commission':
      alert('Open Therapist Commission');
      break;
    case 'recommendation':
      alert('Open Recommendations');
      break;
    default:
      alert('Coming soon!');
  }
}

// Bottom nav click handler
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    alert('Switched to ' + item.textContent);
  });
});

// Search bar functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  console.log('Searching:', e.target.value);
});
