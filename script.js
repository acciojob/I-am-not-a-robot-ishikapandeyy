//your code here
let images = document.querySelectorAll(".flex img");

let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let para = document.getElementById("para");

let selected = [];

let arr = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5", 
    "img1"
];
       
// Shuffle
arr.sort(() => Math.random() - 0.5);

// Add images
for (let i = 0; i < images.length; i++) {

    images[i].className = arr[i];

    images[i].src = arr[i] + ".jpg";

    images[i].addEventListener("click", function () {

        if (selected.length < 2) {
            selected.push(images[i]);
        }

        reset.style.display = "block";

        if (selected.length === 2) {
            verify.style.display = "block";
        }
    });
}


// Verify
verify.addEventListener("click", function () {

    let first = selected[0].className;
    let second = selected[1].className;

    if (first === second) {
        para.innerText = "You are a human. Congratulations!";
    } else {
        para.innerText =
            "We can't verify you as a human. You selected the non-identical tiles.";
    }

    verify.style.display = "none";
}); 


// Reset
reset.addEventListener("click", function () {

    selected = [];

    reset.style.display = "none";
    verify.style.display = "none";
    para.innerText = "";
});