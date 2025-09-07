// auth.js

// Get query parameter like ?next=create-book.html
function getParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const nextPage = getParam("next");

// --- SIGNUP FORM ---
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate password match
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm-password").value;
    if (pass !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate success (replace with backend call later)
    const name = document.getElementById("name").value;
    alert(`Welcome, ${name}! Your account has been created. You can now continue to borrow books and enjoy our library. We’ll keep you updated on your requests.`);

    window.location.href = nextPage || "index.html";
  });
}

// --- LOGIN FORM ---
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Normally check credentials here
    alert("✅ Login successful! You can now continue to borrow books and enjoy our library.");
    window.location.href = nextPage || "index.html";
  });
}

// --- Adjust links (e.g., login.html or signup.html) ---
const loginLink = document.getElementById("loginLink");
if (loginLink && nextPage) {
  loginLink.href = "login.html?next=" + nextPage;
}

const signupLink = document.getElementById("signupLink");
if (signupLink && nextPage) {
  signupLink.href = "signup.html?next=" + nextPage;
}
