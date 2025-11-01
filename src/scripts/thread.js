const params = new URLSearchParams(window.location.search)
const postId = params.get('id')

const threadContentContainer = document.getElementById('thread-content')

/**
 * 
 * @param {string} postId 
 * @returns 
 */
const loadPostContent = async (postId) => {
    if (!postId) return;

    try {
        
        const request = await fetch('../../data/threads.json')
        const allPosts = await request.json();

        const post = allPosts[postId]
        if (!post) return;

        document.getElementById('thread-title').innerText = post.title
        document.title = post.title

        const postElement = `<thread-post user-name="${post.poster}" message="${post.message}"></thread-post>`

        threadContentContainer.insertAdjacentHTML('afterbegin', postElement)

    } catch (error) {
        console.error(error)
    }
}

loadPostContent(postId)