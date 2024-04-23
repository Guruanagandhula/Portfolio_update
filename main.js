import "./style.css";
import Experience from "./Experience/Experience.js";

const experience = new Experience(document.querySelector(".experience-canvas"));

document.addEventListener("DOMContentLoaded", function() {
    var audioButton = document.getElementById("audioButton");
    var audio = document.getElementById("audio");

    audioButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            audioButton.src = "images/volume.png";
        } else {
            audio.pause();
            audioButton.src = "images/mute.png";
        }
    });
    audio.addEventListener("ended", function() {
        audio.currentTime = 0; 
        audio.play(); 
    });
});
