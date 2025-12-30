// SPA Navigation
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('pageTitle');

function showPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  pageTitle.textContent = pageId === 'homePage' ? 'TeMan Wellness' : document.querySelector(`[data-page="${pageId}"] .nav-label`).textContent;
}

// Bottom nav click
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    showPage(item.dataset.page);
  });
});

// Swipe navigation (touch)
let startX = 0;
let endX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if(Math.abs(diff) > 50){
    let activeIndex = Array.from(navItems).findIndex(i => i.classList.contains('active'));
    if(diff < 0 && activeIndex < navItems.length - 1) activeIndex++; // swipe left
    if(diff > 0 && activeIndex > 0) activeIndex--; // swipe right
    navItems[activeIndex].click();
  }
});

// Cards click
function openPage(page){
  alert(`Open ${page}`);
}

// Search bar
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', e => {
  console.log('Searching:', e.target.value);
});
