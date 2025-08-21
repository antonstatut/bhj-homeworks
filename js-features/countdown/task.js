let startValue = document.getElementById("timer");
const startTimer = setInterval(() => {
    startValue.textContent -= 1;
    if(startValue.textContent <= 0){
        clearInterval(startTimer);
        alert("Вы победили в конкурсе!");
    }
  }, 1000);
