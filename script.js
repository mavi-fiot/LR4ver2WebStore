window.addEventListener('resize', function(event) {
    if (window.innerWidth < 500) {
        window.location.href = 'page01mobile.html'; 
    }
    if (window.innerWidth > 500) {
        window.location.href = 'page01tab.html'; 
    }
    if (window.innerWidth > 1000) {
        window.location.href = 'index.html'; 
    }

});