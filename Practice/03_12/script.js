/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Pet from "./Pet.js";

const cat = new Pet(
  "cat",
  "Domestic Long Hair",
  "Small Fry",
  5,
  "black",
  "green",
  true,
  true
);

const dog = new Pet(
  "dog",
  "Pom-chi",
  "Kobi",
  6,
  "black/white",
  "black",
  true,
  false
);

console.log("Cat object from Pet class:", cat);
console.log("Dog object from Pet class", dog);
console.log("Are they hungry?", cat.hungry, " or thirsty?", cat.thirsty);
console.log("Are they hungry?", dog.hungry, " or thirsty?", dog.thirsty);

console.log("Take care of the pets..");
dog.takeCare(true, false);
cat.takeCare(true, true);

console.log("Cat after:", cat);
console.log("Dog after", dog);
console.log("Are they hungry?", cat.hungry, " or thirsty?", cat.thirsty);
console.log("Are they hungry?", dog.hungry, " or thirsty?", dog.thirsty);
