// SPA Navigation
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('pageTitle');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active from nav
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Show corresponding page
    const targetPage = item.dataset.page;
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(targetPage).classList.add('active');

    // Update header title
    pageTitle.textContent = item.textContent === 'Home' ? 'TeMan Wellness' : item.textContent;
  });
});

// Cards click handler
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

// Search bar (for Home page)
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  console.log('Searching:', e.target.value);
});
