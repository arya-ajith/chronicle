document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const enteredUser = document.getElementById("username").value;
  const enteredPass = document.getElementById("password").value;

  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (enteredUser === savedUser && enteredPass === savedPass) {
    alert("Login successful!");
    window.location.href = "index.html"; // redirect
  } else {
    alert("Invalid username or password!");
  }
});
