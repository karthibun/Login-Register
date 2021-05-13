function validateForm() {
	let x=document.forms["lform"]["email"].value;
	console.log("hiii");
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (x.match(regexEmail)) {
    return true; 
  } else {
	alert("email id must contain the @ and .\n character There must be at least one character before and after the @.\nThere must be at least two characters after . (dot).");
    return false; 
  }
}