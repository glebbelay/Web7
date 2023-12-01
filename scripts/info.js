document.addEventListener('DOMContentLoaded', function () {

    function fetchData() {
        console.log('Fetching data...');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                document.getElementById('preloader').classList.add('loaded');
                const filteredData = data.filter(comment => comment.id >= 70);
                console.log('Filtered Data:', filteredData); 
                renderData(filteredData);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                document.getElementById('error-message').innerText = '⚠ Что-то пошло не так';
            });
    }

    function renderData(data) {
        const contentContainer = document.getElementById('content');
    

        contentContainer.innerHTML = '';
    

        data.forEach(item => {
            const titleElement = document.createElement('div');
            titleElement.textContent = item.title;
            titleElement.classList.add('title-item'); 
            contentContainer.appendChild(titleElement);
        });
    }

    fetchData();
});