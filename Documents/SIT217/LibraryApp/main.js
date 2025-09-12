function login(username, password) {
  if (username === 'admin' && password === 'password123') {
    console.log('Login successful!');
  } else {
    console.log('Invalid credentials.');
  }
}

login('admin', 'password123');

