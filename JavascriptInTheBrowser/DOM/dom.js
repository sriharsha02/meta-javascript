//open a sample website like example.com

//in the console tab of chrome dev tools

const h2 = document.createElement(h2);
h2.innerText = "This is an h2 element";

h2.setAttribute("id", "sub-heading");

h2.setAttribute("class", "secondary");

document.body.appendChild(h2);

// js selectors

document.querySelector("p");

document.querySelector("a");

document.querySelectorAll("p");

document.getElementById("heading");

document.getElementsByClassName("txt");
