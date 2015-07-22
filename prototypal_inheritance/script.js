/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/
 
 
/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

 function Make() {
  this.makeName = "Honda"
 };


/*
Create a function, Model, to hold the 
corresponding property and value
*/

function Model() {
  this.modelName = "Civic";
}

// What is the prototype of a Model?

Model.prototype = new Make();

// Define a Car

function Car() {
this.color = "Silver";
}

// What is the prototype of a Car?

Car.prototype = new Model();

// Create the first car

var roach = new Car();
roach.color = "Green";

// Create the second car

var tiger = new Car();
tiger.color = "Orange";

// Create the third car

var slug = new Car();
slug.color = "Red";

console.log(roach);
console.log(tiger);
console.log(slug);

// var writeOut =  document.getElementById("mainOutput");
// writeOut.innerHTML = JSON.stringify(tiger);  






