const textBox = document.getElementById("textBox");
const charCount = document.getElementById("charCount");

const MAX_CHARS = 100;

textBox.addEventListener("input", () => {
    let remaining = MAX_CHARS - textBox.value.length;

    charCount.textContent = `Characters left: ${remaining}`;

    // Bonus: color change
    if (remaining > 60) {
        charCount.style.color = "green";
    } else if (remaining > 30) {
        charCount.style.color = "orange";
    } else {
        charCount.style.color = "red";
    }
});
