function Q1() {
    var names = [];
    for (let i = 0; i < 5; i++) {
        names[i] = prompt("please enter name number " + (i + 1));
    }

    console.log("first name: " + names[0] + " last name: " + names[names.length - 1]);
    console.log("first name: " + names[0]);
    console.log("last name: " + names[names.length - 1]);

    for (let i = names.length - 1; i >= 0; i--) {
        console.log("name number " + (i + 1) + " is: " + names[i]);
    }
}

function Q2() {
    var fruits = ["Apple", "Banana", "Mango", "Peach"];
    console.log("fruit no 1 is: " + fruits[0]);
    console.log("fruit no 2 is: " + fruits[1]);
    console.log("fruit no 3 is: " + fruits[2]);
    console.log("fruit no 4 is: " + fruits[3]);

    for (let i = 0; i < fruits.length; i++) {
        console.log("fruit no " + (i + 1) + " is: " + fruits[i]);
    }
}

function Q3() {
    var grades = [];
    for (let i = 0; i < 10; i++) {
        grades[i] = +prompt(`please enter grade number ${i + 1}`);
    }
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 0 || grades[i] > 100) {
            console.log(`This is an invalid grade "${grades[i]}"`);
        }
    }
}

function Q4() {
    var numbers = [5, 35, 86, 45, 53, 94, 51, 12, 1, 49, 100, 23, 84, 56, 89, 39, 48, 22, 99, 55];
    var sum = 0, max = 0, min = 100;
    for (let index = numbers.length - 1; index >= 0; index--) {
        console.log(numbers[index]);
        sum += numbers[index];
        if (numbers[index] > max) max = numbers[index];
        if (numbers[index] < min) min = numbers[index];
    }
    console.log("the sum of all numbers is: " + sum);
    console.log("the average of all numbers is: " + (sum / 20));
    console.log("the max of all numbers is: " + max);
    console.log("the min of all numbers is: " + min);
}

function Q20() {
    var n = +prompt("please enter your number");
    var str;
    for (let index = 0; index < n; index++) {
        str = "";
        for (let j = 0; j < index + 1; j++) {
            str += " " + (j + 1);
        }
        console.log(str);
    }
}

function Q21() {
    var n = +prompt("please enter your number");
    var str = "";
    for (let index = n - 1; index >= 0; index--) {
        str += " " + (index + 1);
    }
    for (let index = 0; index < n; index++) {
        console.log(str);
    }
}

function Q22() {
    var num;
    while ((num = +prompt("please enter a new number")) > 0) {
        for (let index = num; index > 0; index--) {
            console.log(index);
        }
    }
}

function ATG1() {
    var num, str = "";
    num = +prompt("please enter a number:");
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            str += "* ";
        }
        console.log(str);
        str = "";
    }
}

function ATG2() {
    var str = "";
    var num1 = +prompt("please enter the first number:");
    var num2 = +prompt("please enter the second number:");

    for (let i = 0; i < num2; i++) {
        for (let j = 0; j < num1; j++) {
            str += "* ";
        }
        console.log(str);
        str = "";
    }
}

function ATG7() {
    var num, str = "";
    num = +prompt("please enter a number:");
    for (let i = num; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            str += "* ";
        }
        console.log(str);
        str = "";
    }
}

