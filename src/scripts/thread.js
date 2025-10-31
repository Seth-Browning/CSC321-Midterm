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


const format = (command) => {
    document.execCommand(command, false, null);
}

const toggleBold = () => {
    const selection = window.getSelection();
    if (!selection) return;
    if (!selection.rangeCount) return;
    console.log(selection)
    if (!selection.anchorNode.parentElement) return;
    if (!selection.anchorNode?.parentElement.classList.contains('editable-text-field')) return

    const range = selection.getRangeAt(0)


    const strong = document.createElement('strong')
    strong.appendChild(range.extractContents())
    range.insertNode(strong)
}

document.querySelectorAll('.editor-button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.type === 'bold') {
            toggleBold()
            return
        }

        format(button.dataset.type)
    })
})