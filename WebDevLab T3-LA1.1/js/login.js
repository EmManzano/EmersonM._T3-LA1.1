 // Simulated user data
  const USERS = [
    { username: "ur_emer", password: "em1234" },
    { username: "admin", password: "adminpass" }
  ];

  // Grab form inputs
  const usernameInput = document.querySelector('input[placeholder="Username"]');
  const passwordInput = document.querySelector('input[placeholder="Password"]');
  const loginButton = document.querySelector('.login-btn');

  // Handle login
  loginButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const user = USERS.find(u => u.username === username && u.password === password);
    
    if (user) {
      alert("Login successful! Redirecting to dashboard...");
      // Simulate redirect (change to your real dashboard page path)
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  });
