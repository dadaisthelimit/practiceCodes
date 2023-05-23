const checkPasswordStrength = (passwordPassed) => {
    const password = document.getElementById('password').value;
    const lengthCheck = password.length >= 8;
    const upperCaseCheck = /[A-Z]/.test(password);
    const lowerCaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCharCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const sum = lengthCheck&&upperCaseCheck&&lowerCaseCheck&&numberCheck&&specialCharCheck;
    const indicators = document.querySelectorAll('.indicator');
    const indicator = document.getElementById('strength');
 
 
    if (!upperCaseCheck){
        document.getElementById('upperCase').innerHTML = "Must contain at least one uppercase letter"
    }else{
        document.getElementById('upperCase').innerHTML = ""
    }
 
 
    if (!lowerCaseCheck){
        document.getElementById('lowerCase').innerHTML = "Must contain at least one lowercase letter"
    }else{
        document.getElementById('lowerCase').innerHTML = ""
    }
 
 
    if (!numberCheck){
        document.getElementById('number').innerHTML = "Must contain at least one number"
    }else{
        document.getElementById('number').innerHTML = ""
    }
 
 
    if (!specialCharCheck){
        document.getElementById('specialChar').innerHTML = "Must contain at least one special character"
    }else{
        document.getElementById('specialChar').innerHTML = ""
    }
   
    if (sum) {
        indicator.innerHTML = 'Strong';
        indicators.forEach((indicator) => {
            indicator.classList.add('indicator-bar-strong');
        });
    } else {
        indicator.innerHTML = 'Weak';
        indicators.forEach((indicator) => {
            indicator.classList.remove('indicator-bar-strong');
        });
    }
 }
 
 
 const togglePassword = () => {
    const password = document.getElementById('password');
    const toggle = document.getElementById('toggle');
 
 
    if (password.type === 'password') {
        password.type = 'text';
        toggle.innerHTML = 'Hide';
    } else {
        password.type = 'password';
        toggle.innerHTML = 'Show';
    }
 }
 