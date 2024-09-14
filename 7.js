import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

var msg = {};
msg.payload = { temperature: 20, humidity: 90 };

function returnPropertyValue(message, propertyName) {
  return message.payload[propertyName];
}

while (true) {
  var propertyName = await rl.question(
    "Enter the property name: (temperature/humidity) "
  );

  var data = returnPropertyValue(msg, propertyName);
  console.log(data);
}
