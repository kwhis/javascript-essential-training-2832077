/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, true);
const book2 = new Book("Mrs. Dalloway", "Virginia Wolf", 1925, false);
const book3 = new Book(
  "The Old Man and the Sea",
  "Ernest Hemingway",
  1952,
  true
);
const book4 = new Book("The Catcher in the Rye", "J. D. Salinger", 1951, false);
const book5 = new Book("Little Women", "Louisa May Alcott", 1868, true);

console.log("First Book:", book1);
console.log("Years Since Published:", book1.calcAge());
console.log("Second Book:", book2);
console.log("Years Since Published:", book2.calcAge());
console.log("Third Book:", book3);
console.log("Years Since Published:", book3.calcAge());
console.log("Fourth Book:", book4);
console.log("Years Since Published:", book4.calcAge());
console.log("Fifth Book:", book5);
console.log("Years Since Published:", book5.calcAge());
