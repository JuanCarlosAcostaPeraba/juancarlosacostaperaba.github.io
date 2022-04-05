window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    // Teminal effect
    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ["#fff"];
        let visible = true;
        let con = document.getElementById("console");
        let letterCount = 1;
        let x = 1;
        let waiting = false;
        let target = document.getElementById(id);
        target.setAttribute("style", "color:" + colors[0]);
        window.setInterval(function () {
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);
                window.setTimeout(function () {
                    let usedColor = colors.shift();
                    colors.push(usedColor);
                    let usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute("style", "color:" + colors[0]);
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (
                letterCount === words[0].length + 1 &&
                waiting === false
            ) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount);
                letterCount += x;
            }
        }, 150);
        window.setInterval(function () {
            if (visible === true) {
                con.className = "console-underscore hidden";
                visible = false;
            } else {
                con.className = "console-underscore";

                visible = true;
            }
        }, 500);
    }
    let text = ["Programming", "Web Applications", "Websites", "Back-end"];
    consoleText(text, "text", [""]);

    // Copyright year
    const year = document.getElementById("year");
    year.innerHTML = new Date().getFullYear();
});
