
class ThreadPost extends HTMLElement {
    static observedAttributes = [
        "user-name",
        "message"
    ]

    constructor() {
        super()
    }

    connectedCallback() {
        const name = this.getAttribute('user-name') ?? ""
        const message = this.getAttribute('message') ?? ""

        this.innerHTML = `
            <article class="thread-entry main-post">
                <div class="user-information">
                    <h1 class="user-name">${name}</h1>
                </div>
                <div class="thread-entry-inner">
                    <header class="thread-entry-header"></header>
                    <div class="thread-entry-content">
                        <p class="thread-content-paragraph">${message}</p>
                    </div>
                    <footer class="thread-entry-footer"></footer>
                </div>
            </article>
        `

        this.querySelector('.user-name').addEventListener('click', () => {
            window.location.href = `profile.html?user=${name}`
        })
    }
}

customElements.define("thread-post", ThreadPost)