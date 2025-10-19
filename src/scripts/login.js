
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const username = document.getElementById('username-input').value.trim();
    console.log(username);

    localStorage.setItem('loggedInUser', username);

    window.location.href = 'home.html'
})