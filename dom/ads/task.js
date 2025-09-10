const rotators = document.querySelectorAll(".rotator__case");
let currentIndex = 0;
setInterval(() => {
    rotators[currentIndex].classList.remove("rotator__case_active");
    currentIndex++;
    if (currentIndex === rotators.length){
        currentIndex = 0;
    }
    rotators[currentIndex].classList.add("rotator__case_active");
    const colorValue = rotators[currentIndex].dataset.color;
    const speedValue = rotators[currentIndex].dataset.speed;
    rotators[currentIndex].style.color = colorValue;
    rotators[currentIndex].style.speed = speedValue;
}, 1000);