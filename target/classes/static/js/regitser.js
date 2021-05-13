function validaterForm() {
	let x=document.forms["rform"]["email"].value;
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let p1=document.forms["rform"]["password"].value;
	let p2=document.forms["rform"]["confirmpassword"].value;
	if (x.match(regexEmail)) 
	{
		if(p1==p2)
		{
			return true;
		}
		else
		{
			alert("Both the Password must be same");
			return false
		}
	  } 
	else 
	{
		alert("email id must contain the @ and .\n character There must be at least one character before and after the @.\nThere must be at least two characters after . (dot).");
		return false; 
  	}
}