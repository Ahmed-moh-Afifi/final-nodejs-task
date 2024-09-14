var tempmsg = {};
tempmsg.payload = { temperature: 20 };

var hummsg = {};
hummsg.payload = { humidity: 90 };

function combineMessages(tempmsg, hummsg) {
  var tempData = tempmsg.payload.temperature;
  var humData = hummsg.payload.humidity;

  var combinedMsg = {};
  combinedMsg.payload = { temperature: tempData, humidity: humData };

  return combinedMsg;
}

var data = combineMessages(tempmsg, hummsg);

console.log(data);
