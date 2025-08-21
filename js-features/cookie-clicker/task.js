const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
let checkbox = true;
function sizeCokie(){
    if(checkbox === true){
        image.width = 180;
        checkbox = false;
        return
    }else if(checkbox === false){
        image.width = 200;
        checkbox = true;
        return
    } 
}
image.onclick = () => {
    counter.textContent++;
    sizeCokie();
    }