function validateForm() {
    let name = document.getElementById("nameInput");
    let age = document.getElementById("ageInput");
    let ID = document.getElementById("idInput");
    let email = document.getElementById("emailInput");

    let nameTxt = document.getElementById("nameTxt");
    let ageTxt = document.getElementById("ageTxt");
    let IDTxt = document.getElementById("idTxt");
    let emailTxt = document.getElementById("emailTxt");

    let invalidDataText = document.querySelector("h4");

    let nameValidation = validateName(name.value);
    let ageValidation = validateAge(age.value);
    let idValidation = validateID(ID.value);
    let emailValidation = checkEmailValid(email.value);

    if (!emailValidation || !nameValidation || !ageValidation || !idValidation) {
        if (!emailValidation) emailTxt.style.color = "red";
        if (!nameValidation) nameTxt.style.color = "red";
        if (!ageValidation) ageTxt.style.color = "red";
        if (!idValidation) IDTxt.style.color = "red";

        invalidDataText.innerText = "Invalid data";
        invalidDataText.style.color = "crimson"
        invalidDataText.style.display = "block";

        return false;
    } else {
        emailTxt.style.color = "black";
        nameTxt.style.color = "black";
        ageTxt.style.color = "black";
        IDTxt.style.color = "black";

        invalidDataText.innerText = "Data is valid";
        invalidDataText.style.color = "green"
        invalidDataText.style.display = "block";
        return true;
    }

}

function checkEmailValid(email) {
    let atIndex = [];

    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") atIndex.push(i);
    }
    if (atIndex.length != 1) return false; // cant have more than one @
    if (atIndex[0] == 0) return false; // cant have @ at the start of the email

    if (email[0] == ".") return false; // email cant start with a dot "."


    let splittedEmail = email.split("@");
    if (splittedEmail[splittedEmail.length - 1][0] == ".") return false; // domain cant start with a dot "."

    let doubleQuoted = false;
    if (splittedEmail[0][0] == "\"" && splittedEmail[0][splittedEmail[0].length - 1] == "\"") doubleQuoted = true;

    for (let i = 0; i < splittedEmail[splittedEmail.length - 1].length - 1; i++) { // cant have two dots ".." one after the other 
        if (splittedEmail[splittedEmail.length - 1][i] == "." && splittedEmail[splittedEmail.length - 1][i + 1] == ".") return false;
    }

    for (let i = 0; i < splittedEmail[0].length - 1; i++) { // cant have two dots ".." one after the other 
        if ((splittedEmail[0][i] == "." && splittedEmail[0][i + 1] == ".") && !doubleQuoted) return false;
    }

    let testCh;
    for (let i = 0; i < splittedEmail[0].length; i++) {
        testCh = splittedEmail[0][i];
        if ((testCh == "\"" ||
            testCh == "," ||
            testCh == ":" ||
            testCh == "(" ||
            testCh == ")" ||
            testCh == ";" ||
            testCh == "<" ||
            testCh == ">" ||
            testCh == "[" ||
            testCh == "]" ||
            testCh == " " ||
            testCh == "\\") && !doubleQuoted) return false;
    }
    if (splittedEmail[0].length > 64) return false;

    // cant have "_" in the domain
    for (let i = 0; i < splittedEmail[0].length; i++) {
        testCh = splittedEmail[splittedEmail.length - 1][i];
        if (testCh == "_") return false;
    }

    return true;
}

function validateAge(age) {
    if (age < 5) return false;
    return true;
}

function validateName(name) {
    if (name.length < 5) return false;
    return true;
}

function validateID(id) {
    let dig, sum = 0, mul;
    if (id.length != 9) return false;
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 1) {
            dig = Number.parseInt(id[i]);
            mul = dig * 2;
        } else {
            mul = Number.parseInt(id[i]);
        }
        if (mul > 9) {
            sum += (mul % 10);
            mul = Math.floor(mul / 10);
        }
        sum += mul;
    }
    if ((sum + Number.parseInt(id[8])) % 10 != 0) return false;
    return true;
}