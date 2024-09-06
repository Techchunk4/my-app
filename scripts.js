// Add some interactivity for future animations if needed
window.addEventListener('scroll', function () {
    let elements = document.querySelectorAll('.animate-text');
    let screenSize = window.innerHeight;

    elements.forEach(function (element) {
        let elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < screenSize) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-50px)';
        }
    });
});
