const setupText = document.getElementById("setup");
const punchlineText = document.getElementById("punchline");
const nextBtn = document.getElementById("nextBtn");

function fetchJoke() {
    nextBtn.disabled = true;   // Bonus: disable button during API call
    setupText.textContent = "Loading joke...";
    punchlineText.textContent = "";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            setupText.textContent = data.setup;
            punchlineText.textContent = data.punchline;
            nextBtn.disabled = false;
        })
        .catch(err => {
            setupText.textContent = "Failed to fetch joke.";
            punchlineText.textContent = "";
            nextBtn.disabled = false;
        });
}

// Load first joke when page opens
fetchJoke();

// Fetch new joke on button click
nextBtn.addEventListener("click", fetchJoke);
