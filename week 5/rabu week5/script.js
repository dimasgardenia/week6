var fieldset = document.getElementById('field-group');
fieldset.addEventListener('submit', function(){
    event.preventDefault();

    // ussername
    var usser_name = document.getElementById('name');
    var usser_name0 = '';
    if(usser_name.value === usser_name0){
        return alert('nama anda tidak boleh kosong');
    }

	var user_password = document.getElementById('password');
    var confirm_password = document.getElementById('confirm_password');
    var password0 = '';
    if(user_password.value === password0){
        return alert('password tidak boleh kosong')
    }
    else if (confirm_password.value === password0) {
        return alert('konfirmasi password tidak boleh kosong');
    }
    else if(user_password.value !== confirm_password.value){
        return alert('user password dan konfirmasi password harus sama !');
    }

    // email
    var email = document.getElementById('email');
    var confirm_email = document.getElementById('exampleInputEmail2');
    var email0 = '';
    if(email.value === email0){
        return alert('email tidak boleh kosong');
    }
    else if(confirm_email.value === email0){
        return alert('konfirmasi email tidak boleh kosong');
    }else if (email.value !== confirm_email.value) {
        return alert('email dan confirm email harus sama');
    }

    
   
    alert('Registration Terkirim..............');
    fieldset.submit();
});
