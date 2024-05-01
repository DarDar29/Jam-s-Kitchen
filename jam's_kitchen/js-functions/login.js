$(document).ready(function(){
    $('#loginForm').submit(function(e){
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        if(username == "" || password == ""){
            $('#error').text("Username and password are required");
        } else {
            $.post('login.php', {username: username, password: password}, function(data){
                if(data == "success"){
                    window.location = "dashboard.php"; // Redirect to dashboard.php on successful login
                } else {
                    $('#error').text("Invalid username or password");
                }
            });
        }
    });
});
