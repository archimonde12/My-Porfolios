const form = document.getElementById("signup-form");
const name = document.querySelector("#sign-up-name");
const email = document.querySelector("#sign-up-email");
const password = document.querySelector("#sign-up-password");
const confirmPassword = document.querySelector("#sign-up-confirm-password");


form.onsubmit = function (e) {
    e.preventDefault();

    checkInput();
}

function checkInput() {
    //check input
    let check=true;
    //get the values from the inputs
    const nameValue = name.value
    const emailValue = email.value
    const passwordValue = password.value
    const confirmPasswordValue = confirmPassword.value

    console.log(nameValue, emailValue, passwordValue, confirmPasswordValue)
    if (nameValue === "") {
        //show error
        //add error class
        setErrorFor(name, "Username cannot be blank");
        check=false;
    } else {
        //add success class
        setSuccessFor(name)
    }

    if (emailValue === "") {
        //show error
        //add error class
        setErrorFor(email, "Email cannot be blank");
        check=false;
    } else if (!isEmail(emailValue)) {
         //show error
        //add error class
        setErrorFor(email, "Email is not valid");
        check=false;
    }
    else {
        //add success class
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        //show error
        //add error class
        setErrorFor(password, "Password cannot be blank");
        check=false;
    } else if (!CheckPassword(passwordValue)) {
         //show error
        //add error class
        setErrorFor(password, "Must have 7 to 16 characters");
        check=false;
    } else {
        //add success class
        setSuccessFor(password)
    }


    if (confirmPasswordValue === "") {
        //show error
        //add error class
        setErrorFor(confirmPassword, "Confirm password cannot be blank")
    } else if (confirmPasswordValue !== passwordValue) {
         //show error
        //add error class
        setErrorFor(confirmPassword, "Passwords not match");
        check=false;
    } else {
        //add success class
        setSuccessFor(confirmPassword)
    }

    //show a success message
    if(check) {
        alert("You successful create a new account")
    }
}


function setErrorFor(input, message) {
    const inputWrap = input.parentElement; //input-wrap div
    const small = inputWrap.querySelector('small')

    //add error message inside small
    small.innerText = message;

    //add error class
    inputWrap.className = "input-wrap invalid"
}

function setSuccessFor(input) {
    const inputWrap = input.parentElement;

    //add success class
    inputWrap.className = "input-wrap valid"
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function CheckPassword(inputtxt) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (inputtxt.match(passw)) {
        return true;
    }
    else {
        return false;
    }
}