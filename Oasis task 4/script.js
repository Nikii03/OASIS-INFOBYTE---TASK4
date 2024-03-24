let users = {}; // Object to store registered users

function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username && password) {
        // Check if the user already exists
        if (!users.hasOwnProperty(username)) {
            // Store user securely (e.g., using bcrypt for hashing)
            users[username] = password;
            alert("Registration successful!");
            // Hide registration form and show login form
            document.getElementById("registrationForm").style.display = "none";
            document.getElementById("loginForm").style.display = "block";
        } else {
            alert("User already exists. Please choose a different username.");
        }
    } else {
        alert("Please enter both username and password.");
    }
}

function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    if (users.hasOwnProperty(username)) {
        // Verify password (e.g., using bcrypt for hashing)
        if (users[username] === password) {
            alert("Login successful!");
            // Hide login form and show secured page
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("securedPage").style.display = "block";
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("User not found. Please register first.");
    }
}

function logout() {
    // Clear user session and display login form
    document.getElementById("securedPage").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
