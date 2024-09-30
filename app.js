const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleButton');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mainContent = document.getElementById('main');

// Toggle the sidebar and icons when the button is clicked
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target) && !sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.add('-translate-x-full');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
});