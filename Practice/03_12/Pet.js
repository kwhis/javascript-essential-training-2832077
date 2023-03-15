class Pet {
  constructor(petType, breed, name, age, furColor, eyeColor, hungry, thirsty) {
    this.petType = petType;
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.furColor = furColor;
    this.eyeColor = eyeColor;
    this.hungry = hungry;
    this.thirsty = thirsty;
  }
  takeCare(giveFood, giveWater) {
    this.hungry = !giveFood;
    this.thirsty = !giveWater;
    console.log("Nice work taking care of your pet.");
  }
}

export default Pet;
