window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const RegisteruserName  = urlParams.get('username');
	const Registerpassword = urlParams.get('password');
	var loginUserName = document.forms["myLogin"] ["username"];
	var loginPassword = document.forms["myLogin"] ["password"];
	if (loginUserName.value == RegisteruserName && loginPassword.value == Registerpassword)
	{
		alert("Login Complete!")
	}
	else
	{
		return false;
	}

}

			