document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let storedUser = localStorage.getItem("user");  

    if (storedUser) {
        let userData = JSON.parse(storedUser);

        if (username === userData.username && password === userData.password) {
            localStorage.setItem("loggedIn", "true");

            alert("Login successful!");
            setTimeout(() => {
                window.location.href = "home.html"; 
            }, 1000);
        } else {
            alert("Incorrect username or password! Try again.");
        }
    } else {
        alert("No user found. Please sign up first.");
    }
});

