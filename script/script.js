function Q1(params) {
    let sum = 0;
    if (Array.isArray(params)) {
        for (let i = 0; i < params.length; i++) {
            sum += params[i];
        }
        return sum / params.length;
    } else {
        console.log("this is not an array");
    }
}

console.log(Q1([45, 60, 48]));
console.log(Q1([100, 70, 90]));
console.log(Q1([50, 11, 80]));

//***************************************************** */

function Q2(params) {
    let min;
    if (Array.isArray(params)) {
        min = params[0];  // sets the first param to be checked with the rest
        // the loop skips the first param
        for (let i = 1; i < params.length; i++) {
            if (params[i] < min) min = params[i];
        }
        return min;
    } else {
        console.log("this is not an array");
    }
}
console.log(Q2([45, 60, 48]));
console.log(Q2([100, 70, 90]));
console.log(Q2([50, 11, 80]));

//***************************************************** */

function Q3(params) {
    let max = 0;
    if (Array.isArray(params)) {
        for (let i = 0; i < params.length; i++) {
            if (params[i].length > max) max = params[i].length;
        }
        return max;
    } else {
        console.log("this is not an array");
    }
}

console.log(Q3(["Apple", "Banana", "Peach"]));
console.log(Q3(["123456789", "53", "05894"]));
console.log(Q3(["America", "UnitedKingdoms", "Australia"]));

//****************************************************** */
function Q4(params) {
    let max = 0, index;
    if (Array.isArray(params)) {
        for (let i = 0; i < params.length; i++) {
            if (params[i].length > max) {
                max = params[i].length;
                index = i;
            }
        }
        return params[index];
    } else {
        console.log("this is not an array");
    }
}

console.log(Q4(["Apple", "Banana", "Peach"]));
console.log(Q4(["123456789", "53", "05894"]));
console.log(Q4(["America", "UnitedKingdoms", "Australia"]));

//******************************************************* */
function Q5(params) {
    let sum = 0, avg, count = 0;
    if (Array.isArray(params)) {
        for (let i = 0; i < params.length; i++) {
            sum += params[i];
        }
        avg = sum / params.length;
        for (let i of params) {
            i > avg ? count++ : count;
        }
        return count;
    } else {
        console.log("this is not an array");
    }
}
console.log(Q5([45, 60, 48]));
console.log(Q5([100, 70, 90]));
console.log(Q5([50, 11, 80]));
//******************************************************** */
function Q6(params) {
    if (params >= 2) {

        for (let i = 2; i < params; i++) {
            if (params % i == 0) return false;
        }
        return true;
    } else {
        console.log("the minimum Prime number is 2");
    }
}

console.log(Q6(7));
console.log(Q6(9));
console.log(Q6(25));
console.log(Q6(37));
//****************************************************** */
function Q7(params) {
    if (Array.isArray(params)) {
        for (let index = 0; index < params.length; index++) {
            if (!Q6(params[index])) return false;
        }
        return true;
    } else {
        console.log("this is not an array");
    }
}

console.log(Q7([101, 97, 43]));
console.log(Q7([100, 70, 90]));
console.log(Q7([7, 3, 13]));
console.log(Q7([50, 11, 80]));