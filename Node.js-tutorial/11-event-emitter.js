const EventEmitter = require("events");
//  it has 2 methods "on()" and "emit()"

// creating an instance of EventEmitter
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`another logic`);
});

customEmitter.emit("response", "john", 64);
