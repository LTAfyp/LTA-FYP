let form = document.querySelecter('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    return false;
    
}
);

var database = [
	{
		email: "LTA.gmail.com",
		password: "supersecret"
	}
];

function signIn(email,pass) {
	if (email === database[0].email &&
		pass === database[0].password) {
			console.log();
	}	else {
		alert("Sorry, wrong user name and password!");
	}
}
