document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add('hidden');
            footer.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
            footer.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    header.addEventListener('mouseover', function() {
        header.classList.remove('hidden');
    });

    footer.addEventListener('mouseover', function() {
        footer.classList.remove('hidden');
    });

    document.addEventListener('mousemove', function(event) {
        if (event.clientY <= header.offsetHeight) {
            header.classList.remove('hidden');
        }
        if (window.innerHeight - event.clientY <= footer.offsetHeight) {
            footer.classList.remove('hidden');
        }
    });
});
	