const rocket = document.getElementById("rocket");

const animation = rocket.animate([
    { transform: "translate(0vw, 0vh) rotate(55deg)", offset: 0 },
    { transform: "translate(110vw, -90vh) rotate(65deg)", offset: .3},
    {transform: "translate(110vw, -90vh) rotate(-110deg)", offset: .6},
    { transform: "translate(-20vw, 0vh) rotate(-120deg)", offset: 1}
], {
    duration: 18000,   // 8 seconds
    iterations: 1,
    easing: "linear ",

});
animation.finished.then(() => {
    rocket.style.display = "none";
});