const password = prompt("Enter your password");

function hasMinLength(password) {
    return password.length >= 8;
}

function hasUpperCase(password) {
    return /[A-Z]/.test(password);
}

function hasLowerCase(password) {
    return /[a-z]/.test(password);
}

function hasNumber(password) {
    return /[0-9]/.test(password);
}

function hasSpecialChar(password){
    return /[^a-zA-Z0-9]/.test(password);
}

function getPasswordScore(password) {
    let score = 0;

    if (hasMinLength(password)) score++;
    if (hasUpperCase(password)) score++;
    if (hasLowerCase(password)) score++;
    if (hasNumber(password)) score++;
    if (hasSpecialChar(password)) score++;

    return score;
}

function getStrengthLabel(score){
    if(score<=2){
        return "Weak";
    }else if(score<=4 && score>2){
        return "Medium";
    }else{
        return "Strong";
    }
}

const score = getPasswordScore(password);
console.log("Score:" + score);
console.log("Strength:" + getStrengthLabel(score));