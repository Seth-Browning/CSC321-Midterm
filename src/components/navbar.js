
/**
 * The main navigation bar that should only present one time in each page
 * of the website.
 */
class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const response = await fetch("../assets/icons/icons.svg")
        const svg = await response.text();


        this.innerHTML = `
            <nav>
                <div id="nav-bar-left">
                    <p class="home-page-link">Games Forum</p>
                </div>

                <div id="log-in-options" class="nav-log-dependent" data-active="true">
                    <button class="primary-button">Log In</button>
                    <button class="secondary-button">Sign Up</button>
                </div>

                <div id="logged-in-options" class="nav-log-dependent" data-active="false">
                    <svg class="small-icon"><use href="../assets/icons/icons.svg#bell"></use></svg>
                    <svg class="icon"><use href="../assets/icons/icons.svg#circle-user"></use></svg>
                </div>
            </nav>
        `;
    }
}

customElements.define("nav-bar", NavBar);

/*

<svg class="icon"><use href="#icon-user"></use></svg>
<svg class="icon"><use href="#icon-gear"></use></svg>

<svg class="icon"><use href="#icon-user"></use></svg>
<svg class="icon"><use href="#icon-gear"></use></svg>

 */