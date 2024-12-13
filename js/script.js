document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('#navbarCollapse').classList.toggle('show');
});

const toggleButton = document.getElementById('theme-toggle');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    
    // Save user preference
    if (document.documentElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Validate name
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        alert('Registration successful!');
        // In a real scenario, here you would submit the form data to the server.
    }
});

const modal = document.getElementById('videoModel');
const iframe = document.getElementById('video');
modal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const videoSrc = button.getAttribute('data-src');
    iframe.src = videoSrc;
});
modal.addEventListener('hide.bs.modal', function () {
    iframe.src = '';
});

document.querySelectorAll('.nav-item a').forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        const category = this.querySelector('h6').innerText.toLowerCase();
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.display = item.dataset.category.includes(category) ? 'block' : 'none';
        });
    });
});
