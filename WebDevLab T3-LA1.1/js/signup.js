 document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing page

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!username || !email || !password) {
      message.textContent = "All fields are required!";
      message.style.color = "red";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";
      return;
    }

    message.textContent = "Sign-up successful! 🎉";
    message.style.color = "green";

    // You can send the data to a backend here using fetch()
    console.log({
      username,
      email,
      password,
      remember: document.getElementById("remember").checked
    });

    // Optional: Reset form
    document.getElementById("signupForm").reset();
  });