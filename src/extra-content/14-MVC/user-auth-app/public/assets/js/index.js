const loginForm = $('#login-form');
const signupForm = $('#signup-form');
const logoutBtn = $('#logout-btn');

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $('#email-input').val();
  const password = $('#password-input').val();

  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace('/dashboard');
  }
};

const handleSignUp = async (event) => {
  event.preventDefault();

  const email = $('#email-input').val();
  const password = $('#password-input').val();
  const firstName = $('#first-name').val();
  const lastName = $('#last-name').val();
  const username = $('#username-input').val();

  const response = await fetch('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    }),
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace('/login');
  }
};

const handleLogout = async () => {
  const response = await fetch('/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace('/');
  }
};

loginForm.on('submit', handleLogin);
signupForm.on('submit', handleSignUp);
logoutBtn.on('click', handleLogout);
