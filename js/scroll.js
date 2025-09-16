document.getElementById("projects_button").addEventListener("click", () => {
    const element = document.getElementById("project_div");
 /*   Window.scroll({
        top: 150,
        behavior: "smooth"
    });*/
    element.scrollIntoView({
        behavior: "smooth"
    })

})