class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Is lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log("inside proto func");
    console.log(proto);
  }
}

//first instance of Train class
var myFirstTrain = new Train("red", false);
console.log(myFirstTrain);

//same properties, but still are different objects

var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);

var train4 = new Train("red", false);

train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational");
  }
}

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

train5.toggleLights();
train5.lightsStatus();

train5.getPrototype();
highSpeed1.getPrototype();
