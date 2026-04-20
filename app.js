let score = 0;
let level = 1;

function play() {

    let val = document.getElementById("input").value;
    let box = document.getElementById("box");
    let status = document.getElementById("status");

    box.style.animation = "none";
    box.offsetHeight;

    let correct = Math.floor(Math.random() * 3) + 1;

    if (parseInt(val) === correct) {

        score += 10;
        level++;

        status.innerHTML = "✅ Correct! Nice Move!";
        status.style.color = "lightgreen";

        if (correct === 1) {
            box.style.animation = "move 3s infinite";
        }
        if (correct === 2) {
            box.style.animation = "scale 3s infinite";
        }
        if (correct === 3) {
            box.style.animation = "skew 3s infinite";
        }

    } else {
        score -= 5;
        status.innerHTML = "❌ Wrong! Try Again!";
        status.style.color = "red";

        box.style.background = "red";
    }

    document.getElementById("score").innerText = score;
    document.getElementById("level").innerText = level;

    // difficulty increase effect
    if (level > 5) {
        box.style.boxShadow = "0 0 20px yellow";
    }

    if (level > 10) {
        box.style.boxShadow = "0 0 40px cyan";
    }
}
