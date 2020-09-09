function validate()
{
    var name=document.getElementById("name").value;
    var lname=document.getElementById("lname").value;
    var phone=document.getElementById("phone").value;

    if(name.length<3)
    {
        alert("Enter Valid Name");
        return false;
    }

    if(lname.length < 5 || name == " ")
    {
       alert("Please Enter the Name properly!!");
       return false;
    }

    if(isNaN(phone) || phone.length != 10)
    {
        alert("Enter Valid Phone Number");
        return false;
    }

    alert("Successfully Completed...")
}

function load_home()
{
    document.getElementById("booking").innerHTML;
}