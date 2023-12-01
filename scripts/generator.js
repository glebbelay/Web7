document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('generatorForm');
    const resultContainer = document.getElementById('resultContainer');
    const saveButton = document.getElementById('saveButton');

    let savedResults = loadFromLocalStorage('results') || [];

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const parameterValue = form.elements.parameter.value;

        savedResults.push({
            parameter: parameterValue,
            shouldSave: false 
        });

        displayResults(savedResults);
    });

    saveButton.addEventListener('click', function () {

        savedResults = savedResults.filter(item => item.shouldSave);
        saveToLocalStorage('results', savedResults);
        displayResults(savedResults);
    });

    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function loadFromLocalStorage(key) {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    }

    function displayResults(results) {
        resultContainer.innerHTML = '';
        results.forEach((item, index) => {
            const resultElement = document.createElement('div');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.shouldSave;
            checkbox.addEventListener('change', function () {
                item.shouldSave = checkbox.checked;
            });
            resultElement.appendChild(checkbox);

            const resultText = document.createElement('span');
            resultText.textContent = `${item.parameter}`;
            resultElement.appendChild(resultText);

            resultContainer.appendChild(resultElement);
        });
    }
    displayResults(savedResults);
});