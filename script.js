let images = document.querySelectorAll(".flex img");
let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let para = document.getElementById("para");

let selected = [];

// Correct image URLs
let imageUrls = {
    img1: "https://picsum.photos/id/237/200/300",
    img2: "https://picsum.photos/seed/picsum/200/300",
    img3: "https://picsum.photos/200/300?grayscale",
    img4: "https://picsum.photos/200/300/",
    img5: "https://picsum.photos/200/300.jpg"
};

// Two img5 tiles + four other tiles
let arr = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img5"
];

// Shuffle
arr.sort(() => Math.random() - 0.5);

// Put images on screen
for (let i = 0; i < images.length; i++) {

    images[i].className = arr[i];

    images[i].src = imageUrls[arr[i]];

    images[i].addEventListener("click", function () {

        // Don't select more than 2
        if (selected.length < 2) {

            selected.push(images[i]);

            images[i].classList.add("selected");
        }

        // Show reset after selecting
        reset.style.display = "block";

        // Show verify after selecting 2
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

    // Remove blue borders
    images.forEach(function (image) {
        image.classList.remove("selected");
    });

    reset.style.display = "none";
    verify.style.display = "none";
    para.innerText = "";
});