const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

backButton.addEventListener("click", function () {
    window.location.href = "/Dashboard/Home.html";
});

/*document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.sign-in-container form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = 'javaType.html'; // Redirect to javaType.html
    });
});*/


$(document).ready(function () {
    $('#login').on('click', function () {
        //console.log('test');
        let sid = $('#uid').val();
        let password = $('#pass').val();
        $.ajax({
            type: 'GET',
            url: '/User/GetStudentById',
            data: { sid, password },
            contentType: 'application/x-www=form-url-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function (data) {
                if (data.result != 0) {
                    window.location.href = '/Capstone/javaType/';
                }
                //window.location.href = '@Url.Action("Capstone", "javaType")';
            }
        });
    })

    $('#backButton').click(function () {
        window.location.href = '/Capstone/Home';
    });
})