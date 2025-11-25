const tableBody = document.getElementById("tableBody");
const refreshBtn = document.getElementById("refreshBtn");
const spinner = document.getElementById("spinner");

// Fetch users function
async function fetchUsers() {
    spinner.classList.remove("hidden"); // show spinner
    tableBody.innerHTML = ""; // clear old data

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        data.forEach(user => {
            const row = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        tableBody.innerHTML = `<tr><td colspan="3">Failed to fetch data</td></tr>`;
    }

    spinner.classList.add("hidden"); // hide spinner
}

// Load users on page load
fetchUsers();

// Refresh button clicked
refreshBtn.addEventListener("click", fetchUsers);
