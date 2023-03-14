/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cat = {
  name: "Small Fry",
  breed: "Domestic Long Hair",
  furColor: "black",
  eyeColor: "green",
  hungry: true,
  thirsty: true,
  takeCare: function (giveFood, giveWater) {
    this.hungry = !giveFood;
    this.thirsty = !giveWater;
  },
};

const dog = {
  name: "Kobi",
  breed: "Pom-chi",
  furColor: "black/white",
  eyeColor: "black",
  hungry: true,
  thirsty: false,
  takeCare: function (giveFood, giveWater) {
    this.hungry = !giveFood;
    this.thirsty = !giveWater;
  },
};

console.log("Cat object:", cat);
console.log("Dog object:", dog);

cat.takeCare(true, true);
console.log("Give cat food and water.");
dog.takeCare(true, false);
console.log("Give dog food only.");

console.log("Cat object:", cat);
console.log("Dog object:", dog);
