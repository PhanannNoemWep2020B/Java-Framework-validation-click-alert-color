$(function(){
    $('button').on('click', function(){
        var user = $('#user').val();
        var pass = $('#pass').val();
        isUser(user);
        isPass(pass);
        // (user != "") ? setSuccess('user') : setError('user');
        // (pass != "") ? setSuccess ('pass') : setError('pass');
    });
});

function setSuccess(success){
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError(error){
    $('#' + error).addClass('border-danger').removeClass('border-success');
}
function isUser(u){
    (u != "") ? setSuccess('user') : setError('user');
}
function isPass(p){
    (p != "") ? setSuccess('pass') : setError('pass');
}