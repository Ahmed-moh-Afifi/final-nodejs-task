const date = require("date-and-time");

msg = {};
msg.payload = { temperature: 20, humidity: 90 };

function addTimeStamp(msg) {
  var currentTimeStamp = date.format(new Date(), "YYYY/MM/DD HH:mm:ss");

  msg.payload.timestamp = currentTimeStamp;

  return msg;
}

var data = addTimeStamp(msg);
console.log(data);
