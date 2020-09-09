document.querySelector('.img-btn').addEventListener('click', function()
{
    document.querySelector('.cont').classList.toggle('s-signup')
   }
)

function classListValidate()
{
    var x=document.getElementById("username");
    var y=document.getElementById("password");
    if((x.value == "Ramya") && ( y.value == "ramy2710"))
    {
        alert("Successfully Logged in");
        return false;
    
    }

    if(y.value != "ramy2710")
    {
        alert("Invalid Username or Password.")
        return false;
    }

    
        alert("New User Please Signup Now...");

    
}

function myfunction()
{
    var name=document.getElementById("name").value;
    var username=document.getElementById("user-name").value;
    var password=document.getElementById("pass-word").value;
    var pwd=document.getElementById("pwd").value;

    if(name.length<5)
    {
        alert("Enter Valid Name");
        return false;
    }

    if(username.length < 8)
    {
        alert("Username Should contain atleast 8 characters...")
        return false;
    }

    if(password.length < 4)
    {
        alert("Password is Not Strong");
        return false;
    }
    
    if(pwd!=password)
    {
        alert("Check Your Password");
        return false;
    }
    alert("Registered Successfully...");
}

