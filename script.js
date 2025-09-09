document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button");
    let img = document.getElementById("img");
    let submit = document.getElementById("submit");
    button.addEventListener("click", function () {
        img.style.opacity = 0;
        img.style.transform = "scale(0.1)";
        setTimeout(() => {
            let newSrc = img.src.includes("untitled2.jpeg") ? "Untitled.jpeg" : "untitled2.jpeg";
            let tempImg = new Image();
            tempImg.src = newSrc;
            tempImg.onload = function () {
                img.src = newSrc;
                // Instantly shrink and hide before growing in
                img.style.transform = "scale(1.5)";
                setTimeout(() => {
                    img.style.opacity = 1;
                    img.style.transform = "scale(1)";
                }, 20); // Small delay to trigger transition
            };
        }, 500);
    })
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Form submitted!");
    })

    const textSwitcher = document.getElementById("textSwitcher");
    if (textSwitcher) {
        textSwitcher.addEventListener("click", function () {
            textSwitcher.classList.toggle("active");
        });
    }
})



