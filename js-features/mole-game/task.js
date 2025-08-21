const missClick = document.getElementById("lost");
const killsMole = document.getElementById("dead");


for (let index = 1; index <= 9; index++) {
    function getHole (index) {
        let holeClick = document.getElementById(`hole${index}`);
        return holeClick;
    }
    let hole = getHole (index);
    hole.onclick = function() {
        if (hole.className.includes("hole_has-mole") === true) {
            killsMole.textContent++;
        }else {
            missClick.textContent++;
        }
        if (+killsMole.textContent === 10) {
            alert("Вы победили!")
            killsMole.textContent = 0;
            missClick.textContent = 0;
        }
        if (+missClick.textContent === 5) {
            alert("Вы проиграли!")
            killsMole.textContent = 0;
            missClick.textContent = 0;
        }
    }
}