document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("signupUsername").value.trim();
            let password = document.getElementById("signupPassword").value.trim();

            if (!username || !password) {
                alert("Username and password cannot be empty!");
                return;
            }

            let user = { username, password };
            localStorage.setItem("user", JSON.stringify(user));

            alert("Signup successful! Now log in.");
            window.location.href = "login.html";
        });
    } else {
        console.error("Signup form not found!");
    }
});
