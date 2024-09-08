// When "Get Started" button is clicked
document.getElementById('get-start').addEventListener('click', (e) => {
    e.preventDefault();
    // document.getElementsByClassName('form-container').style.display='block';
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('signInForm').style.display = 'none';
});

// Storing signup credentials globally for login validation
let storedEmail = '';
let storedPassword = '';

// Sign-Up form submission
document.getElementById('submit-up').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the values of the email and password fields
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // Check if both email and password are filled
    if (email === '' || password === '') {
        alert('Please fill in both email and password to sign up.');
    } else {
        // Store email and password for login validation
        storedEmail = email;
        storedPassword = password;

        // If validation passes, show the sign-in form
        document.getElementById('formContainer').style.display = 'block';
        document.getElementById('signUpForm').style.display = 'none';
        document.getElementById('signInForm').style.display = 'block';
    }
});

// Sign-In form submission
document.getElementById('sign-innn').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the values of the sign-in email and password fields
    const email1 = document.getElementById('signInEmail').value;
    const password1 = document.getElementById('signInPassword').value;

    // Validate the login details against the stored credentials


    if (email1 === '' || password1 === '') {
        alert('Please fill in both email and password to sign in.');
        
    }
    if (storedEmail === email1 && storedPassword === password1) {
        alert("Login Successful");
    } else {
        alert("Invalid login details. Please try again.");
        // Show the sign-up form again
        document.getElementById('formContainer').style.display = 'block';
        document.getElementById('signUpForm').style.display = 'block';
        document.getElementById('signInForm').style.display = 'none';
    }
});
