console.log("Welcome to my little UI/UX kingdom")

function burgerMenu() {
    let elem = document.getElementById('nav_menu');
    let buttElem = document.getElementById('burger_butt');
    console.log(!elem.classList.contains('open'));
    if (elem.classList.contains('active_menu')) {
        elem.style.height = "";
        elem.style.padding = "";
        elem.style.opacity = "";
        elem.classList.remove('active_menu');
        buttElem.classList.remove('active_menu');
    } else {
        elem.style.height = "20vh";
        elem.style.padding = "2vh";
        elem.style.opacity = "1";
        elem.classList.add('active_menu');
        buttElem.classList.add('active_menu');
    }
}