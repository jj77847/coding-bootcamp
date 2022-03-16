const signUpForm = $("#sign-up-form");
const loginForm = $("#login-form");
const logoutBtn = $("#logout-btn");

const handleSignUp = async (event) => {
  event.preventDefault();

  const name = $("#fullName").val();
  const email = $("#email").val();
  const password = $("#password").val();

  const payload = JSON.stringify({
    email,
    password,
    name,
  });

  const response = await fetch("/api/users/signup", {
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/profile");
  } else {
    alert("Failed to sign up");
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  const payload = JSON.stringify({
    email,
    password,
  });

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/profile");
  } else {
    alert("Failed to login");
  }
};

const handleLogout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
  });

  if (response.ok) {
    window.location.replace("/login");
  } else {
    alert("Failed to logout");
  }
};

signUpForm.on("submit", handleSignUp);
loginForm.on("submit", handleLogin);
logoutBtn.on("click", handleLogout);
