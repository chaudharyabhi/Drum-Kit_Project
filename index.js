function audio(soundName){
    let sound = new Audio(`./sounds/${soundName}.mp3`);
    sound.play();
}

function makeSound(key) {
    if (key === "w") {
        audio("tom-1");
    }
    else if (key === "a") {
        audio("tom-2");
    }
    else if (key === "s") {
        audio("tom-3");
    }
    else if (key === "d") {
        audio("tom-4");
    }
    else if (key === "j") {
        audio("snare");
    }
    else if (key === "k") {
        audio("crash");
    }
    else if (key === "l") {
        audio("kick-bass");
    }
}

function animation(pressedKey) {
    let clickedKey = document.querySelector(`.${pressedKey}`);
    clickedKey.classList.add("pressed");
    setTimeout(function () {
        clickedKey.classList.remove("pressed");
    }, 100);
}

document.querySelector(".set").addEventListener("click", function (e) {
    makeSound(e.target.innerText);
    animation(e.target.innerText);
});

document.addEventListener("keyup", function (e) {
    makeSound(e.key);
    animation(e.key);
});





