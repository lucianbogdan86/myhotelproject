function validation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    

    if(name.length < 4) {
       text = "Please enter a valid name!"
       error_message.innerHTML = text;
       return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter a valid email adress!"
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10) {
    text = "Please enter a valid phone number!"
    error_message.innerHTML = text;
    return false;
    }

    if(message.length < 20) {
        text = "Please enter more than 20 character message!"
        error_message.innerHTML = text;
        return false;
     }
   
    alert("Message sent successfully! Thank you!")
    return resetForm();
   

}

function resetForm() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    document.getElementById("error_message").innerHTML = "";
    
}
