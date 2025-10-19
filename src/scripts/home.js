
document.querySelectorAll('.thread-creator').forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = `profile.html?user=${element.innerHTML}`
    })
})