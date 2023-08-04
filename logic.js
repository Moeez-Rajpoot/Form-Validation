var nameInput = document.getElementById('Name');
var nameError = document.getElementById('name-error');
var numInput = document.getElementById('Num');
var numError = document.getElementById('phone-error');
var emailInput = document.getElementById('Email');
var emailError = document.getElementById('email-error');
var msgInput = document.getElementById('msg');
var msgError = document.getElementById('msg-error');

function ValidateName() {

    const format = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

    if (nameInput.value === '') {
        nameError.innerHTML = " Name is Required";
        return false;
    }
    if (!format.test(nameInput.value)) {

    nameError.innerHTML = "Enter Full Name Please";
    return false;  
    }

    nameError.innerHTML =  '<i class="fa-solid fa-check"></i>';
    return true;

}

function ValidateNum() {
   
    var Format = /^(03\d{2}|5\d{2}|6\d{2}|7\d{2})\d{7}$/;

    if (numInput.value === '') {
        numError.innerHTML = " Name is Required";
        return false;
    }
    if (!Format.test(numInput.value.trim())) {
        numError.innerHTML= " Invalid Number";
        return false;
    }
    numError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function ValidateMail() {
    var format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Corrected variable name: format

    if (emailInput.value === '') {
        emailError.innerHTML = " Email is Required";
        return false;
    }
    if (!format.test(emailInput.value)) {
        emailError.innerHTML = "Invalid Mail";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}


function ValidateMsg() {

    if (msgInput.value === '') {
        msgError.innerHTML = " Message is Required";
        return false;
    }
  
    if (msgInput.value.length < 30) {
       msgError.innerHTML = "Minimun 30 Character Required";
       return false;
    } else {
        
        msgError.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }
}


function submitform() {
    var isNameValid = ValidateName();
    var isNumValid = ValidateNum();
    var isMailValid = ValidateMail();
    var isMsgValid = ValidateMsg();


    if (isNameValid && isNumValid && isMailValid && isMsgValid) {
        alert("Form Submitted Sucessfully");
        return true;
    } else {
        alert("Not Submitted !");
        return false;
    }
}

