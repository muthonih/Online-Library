// create a function to handle form submission
function handleLogin(event) {
    event.preventDefault();  // prevent browser from submitting  and reload page
  
    // get user input from form
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    // perform authentication
    // replace this with your own server-side code to validate the user's credentials
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // redirect to library page
      window.location.href = 'library.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
}

// add event listener to login form
document.querySelector('#login-form').addEventListener('submit', handleLogin);