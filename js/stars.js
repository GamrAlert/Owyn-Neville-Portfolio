const starList = [];
//on loading the screen this function will go
window.addEventListener("load", function() {

    const screenWidth = document.body.scrollWidth;
    const screenHeight = document.body.scrollHeight; // scroll not inner due to long page

    //amount of divs (stars) created
    let starCount = screenWidth + screenHeight / 250;

    for(let i = 0; i < starCount; i++) {

        /*const stars = document.createElement("div");
        stars.setAttribute("class", "stars");*/
        //creates x,y pos for stars
        let xPos = Math.floor(Math.random() * (screenWidth - 10));
        let yPos = Math.floor(Math.random() * (screenHeight - (screenHeight * .09)))+(screenHeight * .06)  ;
        //creates a star container to host our star and hover zones in
        const starContainer = document.createElement("div");
            starContainer.style.position = "absolute";
            starContainer.style.left = xPos + "px";
            starContainer.style.top = yPos + "px";
        //creates actual stars and gives classes
        const star = document.createElement("div");
            star.className = "stars";  // visible part
        starContainer.appendChild(star);
        //creates zone that will activate moving the stars
        const hoverZone = document.createElement("div");
            hoverZone.style.width = "35px";
            hoverZone.style.height = "35px";
            hoverZone.style.position = "absolute";
            hoverZone.style.left = "0px";
            hoverZone.style.top = "0px";
            hoverZone.style.backgroundColor = "transparent";
        starContainer.appendChild(hoverZone);

        //push info to the document body
        document.body.appendChild(starContainer);
        //push all info to array
        starList.push({
            element: star,
            hoverZone: hoverZone,
            x: xPos,
            y: yPos
        });
    }
    //define these 4 so they can be used globally
    let prevX = null;
    let prevY = null;
    let deltaX = 0;
    let deltaY = 0;
    //update when mouse move to collect pos of cursor
    document.addEventListener("mousemove", (e) => {
        if (prevX === null) {

            prevX = e.pageX;
            prevY = e.pageY;

            deltaX = 0;
            deltaY = 0;

            return;
        }

        deltaX = e.pageX - prevX;
        deltaY = e.pageY - prevY;

        prevX = e.pageX;
        prevY = e.pageY;

    });
    //go through each star to find the one the mouse is over
    starList.forEach(starObj => {
        starObj.hoverZone.addEventListener("mouseover", function() {

            //find +/- of delta to determine direction of the star
            deltaX = Math.sign(deltaX);
            deltaY = Math.sign(deltaY);

            //move star 15 units opposite of mouse direction
            starObj.element.style.transform = `translate(${deltaX * 15}px, ${deltaY * 15}px)`;

            //update star x,y positions
            starObj.x += deltaX;
            starObj.y += deltaY;
        })

    })});
