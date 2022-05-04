/**
 * the solution for 04-Storage.docx
 * questions 1 and 2
 */
function setCookie(key, value) {
    if (value != null && value != "" && key != null && key != "") {
        const ate = new Date();
        ate.setDate(ate.getDate() + 7);
        document.cookie = `${key}=${value};expires=${ate.toUTCString()};`;
    }
}

function getCookie(key) {
    let cookie = document.cookie;
    if (cookie.includes(key)) {
        cookie = cookie.split(";");
        for (let c of cookie) {
            if (c.includes(key)) {
                return c.substring(c.search("=") + 1, c.length);
            }
        }
    }
}

function save() {
    let input = document.getElementById(`${this.id}Input`);
    setCookie(this.id, input.value);
}

function load() {
    alert(getCookie(this.id));
}

let saveBtn = document.querySelectorAll(".saveBtn");
saveBtn.forEach(element => {
    element.addEventListener("click", save);
});
let loadBtn = document.querySelectorAll(".loadBtn");
loadBtn.forEach(element => {
    element.addEventListener("click", load);
});

//************************************************************** */

/**
 * the solution for 04-Storage.docx
 * question 3
 */

let localSaveBtn = document.getElementById("LocalSave");

let phonesList = localStorage.getItem("phonesList") == null ? [] : JSON.parse(localStorage.getItem("phonesList"));

localSaveBtn.addEventListener("click", () => {
    let name = document.getElementById("lNameInput");
    let phone = document.getElementById("lPhoneInput");
    let email = document.getElementById("lEmailInput");

    let nameL = name.value.length;
    let phoneL = phone.value.length;
    let emailL = email.value.length;

    if ((nameL > 2 && nameL < 30) && (phoneL > 2 && phoneL < 30) && (emailL > 2 && emailL < 30) && checkEmailValid(email.value)) {
        phonesList.push({
            "name": name.value,
            "phone": phone.value,
            "email": email.value
        });
        localStorage.setItem("phonesList", JSON.stringify(phonesList));
    }
    else {
        alert("Invalid Fields");
    }
});

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
//************************************************************* */
/**
 * the solution for 04-Storage.docx
 * Bounty Question
 */

let searchSaveBtn = document.getElementById("searchSave");
let searchBtn = document.getElementById("search");
let searchInput = document.getElementById("searchInput");

searchSaveBtn.addEventListener("click", () => {
    if (searchInput.value != null && searchInput.value != "") {
        localStorage.setItem(searchInput.value, searchInput.value);
    }
});
searchBtn.addEventListener("click", () => {
    if (searchInput.value != null && searchInput.value != "") {
        if (localStorage.getItem(searchInput.value)) { alert(localStorage.getItem(searchInput.value)); }
        else { alert("this value does not exist"); }
    }
});