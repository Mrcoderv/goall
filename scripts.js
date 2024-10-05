// Handle registration functionality
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;

        if (newUsername && newPassword) {
            // Store user credentials in localStorage
            localStorage.setItem("username", newUsername);
            localStorage.setItem("password", newPassword);

            // Redirect to login page
            alert("Account created successfully! Redirecting to login.");
            window.location.href = "login.html";
        } else {
            document.getElementById("registerMessage").innerText = "Both fields are required!";
        }
    });
}

// Handle login functionality
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check credentials from localStorage
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            // Redirect to booking page upon successful login
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            document.getElementById("loginMessage").innerText = "Invalid username or password!";
        }
    });
}

// Existing functionality for the booking page (index.html)
window.onload = function() {
    const packageDropdown = document.getElementById("package");
    const packageList = document.getElementById("packageList");

    if (packageDropdown && packageList) {
        const packages = [
            { id: 1, name: "Explore Nepal", price: 1000 },
            { id: 2, name: "Beach Paradise Bali", price: 1200 },
            { id: 3, name: "European Adventure", price: 1500 },
        ];

        // Load packages into the package dropdown and list
        packages.forEach(pkg => {
            let option = document.createElement("option");
            option.value = pkg.id;
            option.text = `${pkg.name} - $${pkg.price}`;
            packageDropdown.appendChild(option);

            let listItem = document.createElement("div");
            listItem.innerHTML = `<strong>${pkg.name}</strong> - $${pkg.price}`;
            packageList.appendChild(listItem);
        });

        // Handle booking submission
        document.getElementById("bookingForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const packageId = document.getElementById("package").value;
            const taxi = document.getElementById("taxi").checked;
            const hotel = document.getElementById("hotel").checked;
            const documents = document.getElementById("documents").checked;

            alert(`Booking confirmed for ${name}! Package ID: ${packageId}, Taxi: ${taxi}, Hotel: ${hotel}, Documents: ${documents}`);
        });
    }
}
