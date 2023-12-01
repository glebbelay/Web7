var currentURL = window.location.href;

var menuLinks = document.querySelectorAll('#menu a');

for (var i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i];
    
    if (currentURL === link.href) {
        link.classList.add('active'); 
    } else {
        link.classList.remove('active'); 
    }
}