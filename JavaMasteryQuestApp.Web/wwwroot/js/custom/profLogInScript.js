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
    window.location.href = "Home.html";
});

//document.addEventListener('DOMContentLoaded', () => {
//    const loginForm = document.querySelector('.sign-in-container form');
//    loginForm.addEventListener('submit', (event) => {
//        event.preventDefault(); // Prevent the default form submission
//        window.location.href = 'profDashboard.html'; // Redirect to javaType.html
//    });
//});

$(document).ready(function () {
    $('#login').on('click', function () {
        let fid = $('#uid').val();
        let password = $('#pass').val();
        //var url = '@Url.Action("Dashboard/profDashboard?viewModel=" + 'fid')';
        $.ajax({
            type: 'GET',
            url: '/User/GetFacultyById',
            data: { fid, password },
            contentType: 'application/x-www=form-url-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                if (data.result != 0) {
                    //Html.ActionLink("profDashboard", "Dashboard", new { viewModel = viewModel })
                    window.location.href = '/Dashboard/profDashboard/';
                    //window.location.href = url.replace(url);
                }
               
            }
        });
    })
})
$('#backButton').click(function () {
    window.location.href = '/Capstone/Home';
});