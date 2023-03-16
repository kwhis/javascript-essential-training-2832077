/**
 * Note: This file is intentionally empty.
 *
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

document.querySelector("body").style.backgroundColor = "black";

document.querySelector(".maincontent").style.backgroundColor = "orange";

document.querySelector(".siteheader").style.backgroundColor = "green";

document.querySelector("header div").style.backgroundColor = "pink";

document.querySelector("h2").style.backgroundColor = "blue";

document.querySelector(".page-header").style.color = "white";

document.querySelector(".sitefooter").style.backgroundColor = "orange";

document
  .querySelectorAll("ul li span")
  .forEach((item) => (item.style.color = "red"));
