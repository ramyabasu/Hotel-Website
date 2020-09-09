function payment()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error_message = document.getElementById("error_message");
    var text;

    if(name.length < 5){
        alert("Please Enter the Details");
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    
    alert("Payment was Successful!..")
}


function myFunction()
{
    alert("You have Reset the Form");
}

