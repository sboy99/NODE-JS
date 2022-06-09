const EventEmitter = require("events");
const customEmitter = new EventEmitter();
//Emitter has two methods on and emit. [On -> triggers an event,emit -> emits the event]
customEmitter.on("eventName", (name, age) => {
  //Actions to perform when event is occured
  console.log(`Event gets occured by robo ${name} and its age is ${age} \n`);
});
customEmitter.on("eventName", () => {
  //Another actions to perform when same event is occured
  console.log("Another Event Occured\n");
});
customEmitter.emit(
  "eventName", //must have to be same as declared in 'on' section
  "Sagar",
  22
);
