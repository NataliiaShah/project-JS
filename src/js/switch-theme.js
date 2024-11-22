// Select the button and the body element
const toggleBtn = document.querySelector('.theme-toggle');
const body = document.body;
const titleSection = document.querySelector('.js-title');

// Check if a theme is already saved in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);

}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-body');
    if (body.classList.contains('dark-body')) {
        localStorage.setItem('theme', 'dark-body');
        localStorage.setItem('theme', 'dark-body');
    } else {
        localStorage.setItem('theme', 'light-body');
    }
});
