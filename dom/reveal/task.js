const reveals = document.querySelectorAll(".reveal");
function isVisible(reveal){
    const top = reveal.getBoundingClientRect().top;
    if (top < window.innerHeight) {
        reveal.classList.add('reveal_active');
    }
}
document.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        isVisible(reveal);
    });
});