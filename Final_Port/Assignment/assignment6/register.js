window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
     form.onsubmit = validateForm;
}

function validateForm() {
	var firstName = document.forms["myForm"] ["firstname"];
    var lastName = document.forms["myForm"] ["lastname"]
    var gender = document.forms["myForm"] ["gender"]
    var date = document.forms["myForm"] ["bday"]
    var email = document.forms["myForm"] ["email"]
    var userName = document.forms["myForm"] ["username"]
    var password = document.forms["myForm"] ["password"]
    var retypePassword = document.forms["myForm"] ["retype-password"]
    var errorMessage = document.getElementById("errormsg");
    if (firstName.value.length == 0)
    {
        return false;
    }
    else if (lastName.value.length == 0)
    {
        return false;
    }
    else if (gender.value.length == 0)
    {
        return false;
    }
    else if (date.value.length == 0)
    {
        return false;
    }   
    else if (email.value.length == 0)
    {
        return false;
    }
    else if (userName.value.length == 0)
    {
        return false;
    }
    else if (password.value.length == 0)
    {
        return false;
    }
    else if (retypePassword.value.length == 0)
    {
        return false;
    }
    else if (password.value != retypePassword.value)
    {
        errorMessage.innerHTML = "Password is not match, Please try again.";
        return false;
    }
}