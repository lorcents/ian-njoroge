function toggleTheme() {
    const body = document.querySelector("body");
    const icon = document.getElementById("icon");
    if (body.className === 'dark') {
        body.className = 'light'
        icon.className = 'icon-moon'
        document.getElementById("section-home").style.backgroundImage = "url(images/mac.JPG)";
        document.getElementById("dsc").src = 'images/DSC.JPG';
    } else {
        body.className = 'dark'
        icon.className = 'icon-sun'
        document.getElementById("section-home").style.backgroundImage = "url(images/macBook.jpeg)";
        document.getElementById("tweets").style.backgroundColor = "black";

        document.getElementById("dsc").src = 'images/DSC-dark.JPG';

    }
}