const skillsGrid = document.getElementById("skillsGrid");
const myName = document.getElementById("name");
const banner = document.getElementById("banner");
const bumper = document.getElementById("bumper");
const projects = document.getElementById("projects");
const envelope = document.getElementById("envelope");
const redBox = document.getElementById("red");
const greenBox = document.getElementById("green");
const blueBox = document.getElementById("blue");

redBox.onclick = function() {
    myName.style.color = "darkred";
    skillsGrid.style.color = "darkred";
    banner.style.backgroundColor = "darkred";
    bumper.style.backgroundColor = "darkred";
    projects.style.backgroundColor = "lightpink";
    envelope.style.color = "darkred"
};

greenBox.onclick = function() {
    myName.style.color = "forestgreen";
    skillsGrid.style.color = "forestgreen";
    banner.style.backgroundColor = "forestgreen";
    bumper.style.backgroundColor = "forestgreen";
    projects.style.backgroundColor = "lemonchiffon";
    envelope.style.color = "forestgreen"
};

blueBox.onclick = function() {
    myName.style.color = "navy";
    skillsGrid.style.color = "navy";
    banner.style.backgroundColor = "navy";
    bumper.style.backgroundColor = "navy";
    projects.style.backgroundColor = "lightsteelblue";
    envelope.style.color = "navy"
};
