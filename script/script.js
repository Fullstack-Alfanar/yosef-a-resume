/**
 * the solution for 04-Storage.docx
 */
function setCookie() {
    const d = new Date();

}

function getCookie(key) {
    if (document.cookie.valueOf(key)) {
        let cookie = document.cookie;
        cookie = cookie.split(";");
        let value;
        for (const c of cookie) {
            if (c.includes(key)) {
                value = c.substring(c.search("=") + 1, c.length);
            }
        }
        alert(value);
    }
}

function save() {
    console.log("save " + this.id);
}
function load() {
    console.log("load " + this.id);
}

let saveBtn = document.querySelectorAll(".saveBtn");
saveBtn.forEach(element => {
    element.addEventListener("click", save);
});
let loadBtn = document.querySelectorAll(".loadBtn");
loadBtn.forEach(element => {
    element.addEventListener("click", load);
});