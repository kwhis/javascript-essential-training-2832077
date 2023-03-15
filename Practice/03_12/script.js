/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Pet from "./Pet.js";

const cat1 = new Pet(
  "cat",
  "Domestic Long Hair",
  "Small Fry",
  5,
  "black",
  "green",
  true,
  true
);

const cat2 = new Pet(
  "cat",
  "Long Hair Calico",
  "Stella",
  6,
  "black/brown",
  "yellow",
  false,
  true
);

const dog1 = new Pet(
  "dog",
  "Pom-chi",
  "Kobi",
  6,
  "black/white",
  "black",
  true,
  false
);

console.log("Pet 1:", cat1);
console.log("Pet 2:", cat2);
console.log("Pet 3:", dog1);

console.log("Take care of the pets..");
cat1.takeCare(true, true);
cat2.takeCare(true, false);
dog1.takeCare(true, false);
