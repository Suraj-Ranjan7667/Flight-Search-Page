function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
  
    if (username === "" || password === "") {
      if (username === "") {
        usernameError.textContent = "Please enter username";
      } else {
        usernameError.textContent = "";
      }
  
      if (password === "") {
        passwordError.textContent = "Please enter password";
      } else {
        passwordError.textContent = "";
      }
    } else if (username === "admin" && password === "admin") {
      // Successful login
      window.location.href = 'search.html';
      // Redirect to the dashboard or another page
    } else {
      usernameError.textContent = "Invalid username or password";
      passwordError.textContent = "";
    }
  }