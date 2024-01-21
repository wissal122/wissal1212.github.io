window.onload = function() {
    addTabFocusAttribute();
    addMouseEvents();
};

function addTabFocusAttribute() {
    var images = document.querySelectorAll('.gallery img');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('focus', function() {
            this.setAttribute('tabindex', '0');
            console.log('Tab focus event triggered for ' + this.alt);
        });
        images[i].addEventListener('blur', function() {
            this.removeAttribute('tabindex');
            console.log('Blur event triggered for ' + this.alt);
        });
    }
}

function addMouseEvents() {
    var images = document.querySelectorAll('.gallery img');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseover', function() {
            console.log('Mouseover event triggered for ' + this.alt);
        });
        images[i].addEventListener('mouseleave', function() {
            console.log('Mouseleave event triggered for ' + this.alt);
        });
    }
}
