class GeneratorComponent extends HTMLElement {
    constructor() {
        super();

        this.savedResults = this.loadFromLocalStorage('results') || [];

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="../form.css">
            <form id="generatorForm" class="your-form-class">
                <input type="text" name="parameter" class="your-input-class" />
                <button type="submit" class="your-button-class">Сохранить</button>
            </form>
            <div id="resultContainer" class="your-result-container-class"></div>
        `;

        this.form = this.shadowRoot.getElementById('generatorForm');
        this.resultContainer = this.shadowRoot.getElementById('resultContainer');

        this.form.addEventListener('submit', this.handleSubmit.bind(this));

        this.displayResults();
    }

    handleSubmit(event) {
        event.preventDefault();

        const parameterValue = this.form.elements.parameter.value;

        this.savedResults.push({ parameter: parameterValue });
        this.saveToLocalStorage('results', this.savedResults);
        this.displayResults();
        this.form.reset();
    }

    saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    loadFromLocalStorage(key) {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    }

    displayResults() {
        this.resultContainer.innerHTML = '';
        this.savedResults.forEach((item, index) => {
            const resultElement = document.createElement('div');
            const resultText = document.createElement('span');
            resultText.textContent = `${item.parameter}`;
            resultElement.appendChild(resultText);
            this.resultContainer.appendChild(resultElement);
        });
    }
}

customElements.define('generator-component', GeneratorComponent);
