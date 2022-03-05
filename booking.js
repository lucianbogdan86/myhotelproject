let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
console.log(today);



function validation() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;

    if(firstName.length < 2) {
       text = "Please enter a valid first name!"
       error_message_2.innerHTML = text;
       return false;
    }

    if(lastName.length < 2) {
        text = "Please enter a valid last name!"
        error_message_2.innerHTML = text;
        return false;
     }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter a valid email adress!"
        error_message_2.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10) {
        text = "Please enter a valid phone number!"
        error_message_2.innerHTML = text;
        return false;
    }

    if(checkIn < today) {
        text = "You have selected a day in the past!"
        error_message_2.innerHTML = text;
        return false;
    }

    if(checkOut <= checkIn) {
        text = "Check-out Date must be greater than Check-in Date!"
        error_message_2.innerHTML = text;
        return false;
    }

    if(adults.length > 2) {
        text = "Maximum number of adults per room is 2!"
        error_message_2.innerHTML = text;
        return false;
    }

    if(children.length > 2) {
        text = "Maximum number of children per room is 2!"
        error_message_2.innerHTML = text;
        return false;
    }

    console.log(checkIn)
       
    alert("Your booking was send! In short time you will recieve a confirmation email! Thank you!")
    return resetForm();
   

}

function resetForm() {

    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("room").value = "";
    document.getElementById("check-in").value = "";
    document.getElementById("check-out").value = "";
    document.getElementById("adults").value = "";
    document.getElementById("children").value = "";
    document.getElementById("error_message_2").innerHTML = "";
    
}