
let inp = document.getElementById("passwordInput");
inp.addEventListener("input", e => {
    // test 1
    let test1 = document.querySelector("#test1");
    let icon1 = document.querySelector("#test1 i");
    icon1.classList = [];
    if (inp.value.length >= 8) {
        icon1.classList.add("bi", "bi-check");
        test1.style.color = "green";
    } else {
        test1.style.color = "red";
        icon1.classList.add("bi", "bi-x");
    }

    // test 2
    let test2 = document.querySelector("#test2");
    let icon2 = document.querySelector("#test2 i");
    icon2.classList = [];
    if ((/[A-Z]/).test(inp.value)) {
        icon2.classList.add("bi", "bi-check");
        test2.style.color = "green";
    } else {
        test2.style.color = "red";
        icon2.classList.add("bi", "bi-x");
    }

    // test 3
    let test3 = document.querySelector("#test3");
    let icon3 = document.querySelector("#test3 i");
    icon3.classList = [];
    if ((/[a-z]/).test(inp.value)) {
        icon3.classList.add("bi", "bi-check");
        test3.style.color = "green";
    } else {
        test3.style.color = "red";
        icon3.classList.add("bi", "bi-x");
    }

    // test 4
    let test4 = document.querySelector("#test4");
    let icon4 = document.querySelector("#test4 i");
    icon4.classList = [];
    if ((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(inp.value)) {
        icon4.classList.add("bi", "bi-check");
        test4.style.color = "green";
    } else {
        test4.style.color = "red";
        icon4.classList.add("bi", "bi-x");
    }
    // test 5
    let test5 = document.querySelector("#test5");
    let icon5 = document.querySelector("#test5 i");
    icon5.classList = [];
    if (testThreeNumbers(inp.value)) {
        icon5.classList.add("bi", "bi-check");
        test5.style.color = "green";
    } else {
        test5.style.color = "red";
        icon5.classList.add("bi", "bi-x");
    }
    // test 6
    let test6 = document.querySelector("#test6");
    let icon6 = document.querySelector("#test6 i");
    icon6.classList = [];
    if (onlyEnglish(inp.value) && inp.value != "") {
        icon6.classList.add("bi", "bi-check");
        test6.style.color = "green";
    } else {
        test6.style.color = "red";
        icon6.classList.add("bi", "bi-x");
    }
});

function testThreeNumbers(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ((/[0-9]/).test(str[i])) {
            count++;
            if (count == 3) return false;
        } else count = 0;
    }
    return true;
}

function onlyEnglish(str) {
    for (let i = 0; i < str.length; i++) {
        if (!(/[0-9]|[a-z]|[A-Z]|[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(str[i])) {
            return false;
        }
    }
    return true;
}

