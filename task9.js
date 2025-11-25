const loadBtn = document.getElementById("loadBtn");
const loadingText = document.getElementById("loadingText");
const postList = document.getElementById("postList");
const errorMsg = document.getElementById("errorMsg");
const retryBtn = document.getElementById("retryBtn");

// Simulated delayed Promise
function loadPostsPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const failChance = Math.random() < 0.3; // 30% chance to fail
            if (failChance) {
                reject("Failed to load posts. Please try again.");
            } else {
                resolve([
                    "How to Build Your First Website",
                    "10 Tips for Better JavaScript",
                    "Why CSS is Amazing!",
                    "Async & Await Explained Simply",
                    "Top 5 VSCode Extensions"
                ]);
            }
        }, 2000);
    });
}

async function loadPosts() {
    postList.innerHTML = "";
    errorMsg.classList.add("hidden");
    retryBtn.classList.add("hidden");

    loadingText.classList.remove("hidden");

    try {
        const posts = await loadPostsPromise();
        
        loadingText.classList.add("hidden");

        posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post;
            postList.appendChild(li);
        });

    } catch (error) {
        loadingText.classList.add("hidden");

        errorMsg.textContent = error;
        errorMsg.classList.remove("hidden");

        retryBtn.classList.remove("hidden");
    }
}

loadBtn.addEventListener("click", loadPosts);
retryBtn.addEventListener("click", loadPosts);
