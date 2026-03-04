function signup(){
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup successful! Please login.");
    window.location.href = "index.html";
}

function login(){
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if(email === storedEmail && password === storedPassword){
        localStorage.setItem("loggedInUser", email);
        window.location.href = "property-type.html";
    } else {
        alert("Invalid credentials");
    }
}