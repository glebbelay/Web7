class PreloaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = '<div id="preloader"><img src="../kaktus-95x128.png"></div>';
    }
}

class ContentComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        try {

            this.classList.add('loading');

            const response = await fetch('https://jsonplaceholder.typicode.com/posts?id_gte=70');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Data received:', data);
            this.renderData(data);
            this.classList.remove('loading');
        } catch (error) {
            console.error('Fetch error:', error);

            this.shadowRoot.innerHTML = '<div id="error-message">Что-то пошло не так</div>';
        }
    }

    renderData(data) {
        this.shadowRoot.innerHTML = '<link rel="stylesheet" href="info.css">';

        data.forEach(item => {
            const titleElement = document.createElement('p');
            titleElement.textContent = item.title;
            titleElement.classList.add('title-item');
            this.shadowRoot.appendChild(titleElement);
        });
    }
}

customElements.define('preloader-component', PreloaderComponent);
customElements.define('content-component', ContentComponent);