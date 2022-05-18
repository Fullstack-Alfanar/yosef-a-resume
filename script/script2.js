/**
 *  the solution for homeWork.docx
 */
function displayName() {
    console.log("my name is yosef awad");
}

function cool(callback) {
    callback();
}

cool(displayName);

function randomNum() {
    console.log("The random number is " + (Math.random() / Math.random()));
}

cool(randomNum);

function nice(callback) {
    callback(42);
}

function displayNum(num) {
    console.log("The number is " + num);
}

nice(displayNum);

function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    document.write(`<h2>Num: ${num}</h2>`);
}

function chooseRandom(params1, params2, params3, params4, params5) {
    let arr = [];
    arr.push(params1);
    arr.push(params2);
    arr.push(params3);
    arr.push(params4);
    arr.push(params5);

    return arr[Math.floor(Math.random() * arr.length)];
}

amazing(chooseRandom);
//********************************************************************************** */

/**
 * the solution for 03-JSON.docx
 */
books = [
    {
        "ID": "111",
        "Name": "Harry Potter",
        "Author": "J. K. Rowling",
        "Price": 329
    },
    {
        "ID": "222",
        "Name": "Game of Thrones",
        "Author": "George R. R. Martin",
        "Price": 84
    },
    {
        "ID": "333",
        "Name": "Treasure Island",
        "Author": "Robert Louis Stevenson",
        "Price": 58
    }
];

let booksString = JSON.stringify(books);
alert(booksString);
let items = JSON.parse(booksString);

console.log("books: " + books);
console.log("items: " + items);

for (let i = 0; i < items.length; i++) {
    let h41 = document.createElement("h4");
    let h42 = document.createElement("h4");
    let h43 = document.createElement("h4");
    let h44 = document.createElement("h4");
    let h45 = document.createElement("h4");
    h41.textContent = "Book ID: " + items[i].ID;
    document.body.appendChild(h41);
    h42.textContent = "Book Name: " + items[i].Name;
    document.body.appendChild(h42);
    h43.textContent = "Book Author: " + items[i].Author;
    document.body.appendChild(h43);
    h44.textContent = "Book Price: " + items[i].Price;
    document.body.appendChild(h44);
    h45.textContent = "-------------------------";
    document.body.appendChild(h45);
}

let myCat = { "name": "olive", "age": 2, "color": "grey", "isSterile": true };
let catJSON = JSON.stringify(myCat);
alert(catJSON);
let yourCat = JSON.parse(catJSON);
let h41 = document.createElement("h4");
let h42 = document.createElement("h4");
let h43 = document.createElement("h4");
let h44 = document.createElement("h4");
h41.textContent = "Name: " + yourCat.name;
document.body.appendChild(h41);
h42.textContent = "Age: " + yourCat.age;
document.body.appendChild(h42);
h43.textContent = "Color: " + yourCat.color;
document.body.appendChild(h43);
h44.textContent = "Is Sterile: " + yourCat.isSterile;
document.body.appendChild(h44);
//*************************************************************************** */
