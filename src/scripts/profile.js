const params = new URLSearchParams(window.location.search);
const userName = params.get('user')

const userNotFound = document.getElementById('user-not-found')
const userInfoBar = document.getElementById('user-info-bar')

const resetDisplay = () => {
    userNotFound.dataset.active = "false"
    userInfoBar.dataset.active = "true"
}

const noUser = () => {
    userNotFound.dataset.active = "true"
    userInfoBar.dataset.active = "false"
}

/**
 * Gets User information from the sample users.json file
 * and populates the appropriate fields with the information.
 * If no user is found then the page will update to notify the user.
 * 
 * @param {string} userKey 
 */
const loadUser = async (userKey) => {
    noUser();

    if (!userKey) { return; }

    try {

        const response = await fetch('../../data/users.json');
        const users = await response.json();

        const user = users[userKey]
        if (!user) {
            noUser()
            return;
        }

        resetDisplay()

        document.title = `${userKey}'s Profile`

        document.getElementById('user-name').innerText = userKey;
        document.getElementById('user-joined').innerText = `Joined: ${user.joined}`
        document.getElementById('user-bio').innerText = user.bio
        document.getElementById('user-followers').innerText = user.observes_number
        document.getElementById('user-following').innerText = user.observed_by_number

    } catch (err) {
        console.error(err)
        noUser()
    }
}

loadUser(userName)