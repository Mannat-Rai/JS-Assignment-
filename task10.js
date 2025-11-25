const searchBox = document.getElementById("searchBox");
const loading = document.getElementById("loading");
const productGrid = document.getElementById("productGrid");

let products = [];

// Fetch products from API
async function fetchProducts() {
    loading.classList.remove("hidden");
    const res = await fetch("https://fakestoreapi.com/products");
    products = await res.json();
    loading.classList.add("hidden");
    displayProducts(products);
}

// Display product cards
function displayProducts(list) {
    productGrid.innerHTML = "";

    list.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h4>${item.title.slice(0, 40)}...</h4>
            <p>$${item.price}</p>
        `;

        productGrid.appendChild(card);
    });
}

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), delay);
    };
}

// Search filter
function filterProducts() {
    const text = searchBox.value.toLowerCase();

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(text)
    );

    displayProducts(filtered);
}

const debouncedSearch = debounce(filterProducts, 300);
searchBox.addEventListener("input", debouncedSearch);

// Start fetching
fetchProducts();
