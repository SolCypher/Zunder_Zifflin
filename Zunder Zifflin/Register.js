
var Name;
var Email;
var Gender;
var Address;
var City;
var text1;

function getInput(){
    Name = document.getElementById("name").value;
    Email = document.getElementById("email").value;
    Gender = document.getElementsByName("gender");
    Address = document.getElementById("address").value;
    City = document.getElementById("city").value;

}

function validateEmail(text){
    if(text.includes(".com") ){
        return true;
    }

}

function validateAddress(text){
    if(text.includes("Jl.") ){
        return true;
    }

}

function validate(){
    getInput();

    if(Name == ""){
        document.getElementById("errorMsg").innerHTML = "Name must be filled!";
        return false;
    }

    if(Name.length <= "5"){
        document.getElementById("errorMsg").innerHTML = "Name must more than 5 characters!";
        return false;
    }

    if(Email == ""){
        document.getElementById("errorMsg").innerHTML = "Email must be filled!";
        return false;
    }

    if(!validateEmail(Email) ){
        document.getElementById("errorMsg").innerHTML = "Email must contain .com";
        return false;
    }

    var genderIsChecked = false;

    for(let i = 0; i<Gender.length ; i++){
        if(Gender[i].checked){
            genderIsChecked = true;
        }
    }

    if(!genderIsChecked){
        document.getElementById("errorMsg").innerHTML = "Gender must be chosen!";
        return false;
    }

    if(Address == ""){
        document.getElementById("errorMsg").innerHTML = "Address must be filled!";
        return false;
    }

    if(!validateAddress(Address) ){
        document.getElementById("errorMsg").innerHTML = "Address must contain Jl.";
        return false;
    }

    if(City == "default"){
        document.getElementById("errorMsg").innerHTML = "City must be chosen!";
        return false;
    }

    if(!document.getElementById("checkbox").checked){
        document.getElementById("errorMsg").innerHTML = "You must agree to terms and services to register!";
        return false;
    }

    document.getElementById("errorMsg").innerHTML = "";
    return false;
}
