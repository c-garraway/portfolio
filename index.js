const skillsgrid = document.getElementById("skillsgrid");
const myname = document.getElementById("name");
const banner = document.getElementById("banner");
const bumper = document.getElementById("bumper");
const projects = document.getElementById("projects");
const envelope = document.getElementById("envelope");

const redbox = document.getElementById("red");
const greenbox = document.getElementById("green");
const bluebox = document.getElementById("blue");

redbox.onclick = function() {
    myname.style.color = "crimson";
    skillsgrid.style.color = "crimson";
    banner.style.backgroundColor = "crimson";
    bumper.style.backgroundColor = "crimson";
    projects.style.backgroundColor = "lightpink";
    envelope.style.color = "crimson"
};

greenbox.onclick = function() {
    myname.style.color = "forestgreen";
    skillsgrid.style.color = "forestgreen";
    banner.style.backgroundColor = "forestgreen";
    bumper.style.backgroundColor = "forestgreen";
    projects.style.backgroundColor = "lemonchiffon";
    envelope.style.color = "forestgreen"
};

bluebox.onclick = function() {
    myname.style.color = "navy";
    skillsgrid.style.color = "navy";
    banner.style.backgroundColor = "navy";
    bumper.style.backgroundColor = "navy";
    projects.style.backgroundColor = "lightsteelblue";
    envelope.style.color = "navy"
};
