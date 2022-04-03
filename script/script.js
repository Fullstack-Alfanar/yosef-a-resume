//* Question 1
function Q1() {
    let firstName = prompt("What is your first name:");
    let lastName = prompt("What is your first name:");

    console.log(`User name: ${firstName} ${lastName}.`);
}

// Q1();
// Q1();


//! ********************************************************** */
//* Question 2 use Q2() to test
function Q2(a, b, c) {
    let sum = a + b + c;
    console.log(`The sum is: ${sum}, the Average is: ${sum / 3}`);
}

function rand() {
    return Math.ceil(Math.random() / Math.random());
}

// Q2(90, 85, 101);
// Q2(rand(), rand(), rand());
// Q2(+prompt("Enter first number:"), +prompt("Enter second number:"), +prompt("Enter third number:"));


//! ********************************************************** */
//* Question 3 use Q3b() to test

//? the function CreateStars() is used multiple times 
function Q3a(len) {
    console.log(CreateStars(len));
}

function Q3b(size) {
    for (let index = 0; index < size; index++) {
        Q3a(size);
    }
}

// Q3b(+prompt("Enter the size of the square."));


//! ********************************************************** */
//* Question 4 use Q4b() to test

//? the function CreateNumbers() is used multiple times 
function Q4a(limit) {
    console.log(CreateNumbers(limit));
}

function Q4b(size) {
    for (let index = 0; index < size; index++) {
        Q4a(index + 1);
    }
}

// Q4b(+prompt("Enter the size of the triangle."));

//! ********************************************************** */
//* Question 5 use Q5b() to test

//? this function is similar to Q3b() and both can work using Q3a()
function Q5b(size) {
    for (let index = size; index > 0; index--) {
        Q3a(index);
    }
}

// Q5b(5);

//! ********************************************************** */

//? these functions are use multiple times
function CreateStars(len) {
    let str = "";
    for (let i = 0; i < len; i++) {
        str += "* ";
    }
    return str;
}

function CreateNumbers(limit) {
    let str = "";
    for (let i = 0; i < limit; i++) {
        str += (i + 1) + " ";
    }
    return str;
}

//! ********************************************************** */
//* Question 6 use Q6b() to test
function Q6a(n) {
    console.log(CreateNumbers(n) + CreateStars(n));
}

function Q6b(n) {
    for (let index = n; index > 0; index--) {
        Q6a(index);
    }
}

// Q6b(4);

//! ********************************************************** */
//* Question 7 use Q7() to test
function Q7(n) {
    for (let i = n; i > 0; i--) {
        console.log(CreateStars(i));
    }
    for (let i = 0; i < n; i++) {
        console.log(CreateStars(i + 1));
    }
}

// Q7(4);