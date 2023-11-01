console.log("Logged from JS");
toggleDarkMode();
var btn = document.getElementById("toggle");

btn.addEventListener('click', ()=> {
    toggleDarkMode();
});

function toggleDarkMode() {  
   let btn = document.getElementById("toggle"); 
    let bodyElem = document.documentElement;
    if (bodyElem.classList.contains("light")) {
        bodyElem.classList.remove("light")
        bodyElem.classList.add("dark")
        btn.innerText = "Light Mode";
    } else if (bodyElem.classList.contains("dark")) {
        bodyElem.classList.remove("dark")
        bodyElem.classList.add("light")
        btn.innerText = "Dark Mode";
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            bodyElem.classList.add("dark")
            btn.innerText = "Light Mode"
        } else {
            bodyElem.classList.add("light")
            btn.innerText = "Dark Mode";
        }
    }
}