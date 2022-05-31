const skillsgrid = document.getElementById("skillsgrid");
const myname = document.getElementById("name");
const redbox = document.getElementById("red");
const greenbox = document.getElementById("green");
const bluebox = document.getElementById("blue");

redbox.onmouseover = function() {
    myname.style.color = "crimson";
    skillsgrid.style.color = "crimson";
};

greenbox.onmouseover = function() {
    myname.style.color = "forestgreen";
    skillsgrid.style.color = "forestgreen";
};

bluebox.onmouseover = function() {
    myname.style.color = "navy";
    skillsgrid.style.color = "navy";
};
