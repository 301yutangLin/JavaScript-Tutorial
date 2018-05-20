/*
var start = new Date().getTime();
appearAfterDelay();


document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay();
}

function makeShapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = (Math.random() * 200)+100;
    if(Math.random() > 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    } else{
        document.getElementById("shape").style.borderRadius = "0";
    }
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}*/

var images=["Images/police.jpg", "Images/thief.jpg"];
var life_image = ["Images/one.png", "Images/two.png", "Images/three.png"];
var life = 3;
var points = 0;


document.getElementById("points").innerHTML = points.toString();


appearAfterDelay();


document.getElementById("shape").onclick = function () {
    var image_src = document.getElementById("shape").getAttribute("src");
    if(image_src !== images[1]){
        life-=1;
        switch(life){
            case 0:
                document.getElementById("health").src = life_image[2];
                break;
            case 1:
                document.getElementById("health").src = life_image[1];
                break;
            case 2:
                document.getElementById("health").src = life_image[0];
                break
        }

    } else{
        points+=1;
        document.getElementById("points").innerHTML = points.toString();
    }
    document.getElementById("shape").style.display = "none";

    if(life>0){
        appearAfterDelay();
    }else{
        alert("Game Over!!! Your scores is " + points.toString());
    }
};

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

function makeShapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var police_or_thief = document.getElementById("shape");
    if(Math.random() > 0.5){
        police_or_thief.src = images[0];
    } else{
        police_or_thief.src = images[1];
    }
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
}
