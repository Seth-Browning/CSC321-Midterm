
const debugResetState = () => {
    localStorage.removeItem('loggedInUser');
    
    window.location.reload();
}