document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const container = document.getElementById('container');
    const changePasswordContainer = document.querySelector('.change-password-container');
    const signInContainer = document.querySelector('.sign-in-container');
    const signUpContainer = document.querySelector('.sign-up-container');
    const loginForm = document.querySelector('.sign-in-container form');

    // Handle sign up and sign in panel switching
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
        hideChangePasswordForm();
        showSignUpForm();
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
        hideChangePasswordForm();
        showSignInForm();
    });

    // Handle "Forgot Password" link click
    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault();
        // Show the change password form only, without toggling the panel
        changePasswordContainer.style.display = 'block';
        hideSignInAndSignUpForms();
    });

    // Show/hide password functionality
    const showPasswordButtons = document.querySelectorAll('.show-password');

    showPasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = document.querySelector(button.getAttribute('data-target'));
            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = 'Hide';
            } else {
                input.type = 'password';
                button.textContent = 'Show';
            }
        });
    });

    // Hide the change password form
    function hideChangePasswordForm() {
        changePasswordContainer.style.display = 'none';
    }

    // Show the sign-in form
    function showSignInForm() {
        signInContainer.style.display = 'block';
        signUpContainer.style.display = 'none'; // Hide the sign-up form
    }

    // Show the sign-up form
    function showSignUpForm() {
        signInContainer.style.display = 'none'; // Hide the sign-in form
        signUpContainer.style.display = 'block';
    }

    // Hide both sign-in and sign-up forms
    function hideSignInAndSignUpForms() {
        signInContainer.style.display = 'none';
        signUpContainer.style.display = 'none';
    }

    // Redirect to home on back button click
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', () => {
        window.location.href = '/Capstone/Home';
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = '/Dashboard/profDashboard';
    });
});
