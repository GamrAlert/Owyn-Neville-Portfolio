document.addEventListener("DOMContentLoaded", function() {
    let csslogo = document.getElementById("csslogo");

    csslogo.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: 'translateY(200%)', opacity: 1 },
        {transform: 'translateY(-120%)', opacity: 1 }

    ], {
        duration: 15000,
        iterations: Infinity,
        direction: "alternate",
        easing: 'linear'
    });

    let htmlLogo = document.getElementById("htmllogo");
    htmlLogo.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: 'translateY(200%)', opacity: 1 },
        {transform: 'translateY(-120%)', opacity: 1 }
    ], {
        duration: 15000,
        iterations: Infinity,
        direction: "alternate",
        easing: 'linear'
    });

    let jsLogo = document.getElementById("jslogo");
    jsLogo.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: 'translateY(320%)', opacity: 1 }
    ], {
        duration: 15000,
        iterations: Infinity,
        direction: "alternate",
        easing: 'linear'
    });
})


