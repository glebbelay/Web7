(function() {
    var startTime = performance.now(); 

    window.addEventListener('load', function() {
        var endTime = performance.now(); 

        var loadTime = endTime - startTime; 

        var resultElement = document.getElementById('res');
        resultElement.innerHTML = 'Время загрузки страницы: ' + loadTime + ' мс';
    });
})();