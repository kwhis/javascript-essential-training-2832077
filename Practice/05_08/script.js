/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
document
  .querySelectorAll(".backpack__image")
  .forEach((item) => item.classList.add("new-class", "another-class"));

document
  .querySelectorAll(".backpack__image")
  .forEach((item) => item.classList.remove("another-class"));

document.querySelector("img").setAttribute("alt", "Clipart of gray backpack");

console.log(document.querySelector("img").getAttribute("alt"));

document
  .querySelector("img")
  .setAttribute("alt", "Clipart image of a gray backpack");

console.log(document.querySelector("img").getAttribute("alt"));

document.querySelector(".site-title").style.color = "rebeccapurple";

console.log(document.querySelector(".site-description").style);
