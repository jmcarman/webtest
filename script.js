document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.innerHTML = 'Menu';
    navToggle.classList.add('nav-toggle');
    nav.insertBefore(navToggle, nav.firstChild);

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            nav.classList.remove('nav-open');
        }
    });
});
