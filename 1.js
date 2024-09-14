var jsonText = '{"temperaure": 30, "humidity": 90}';

function checkTemperature(jsonText) {
  var tempData = JSON.parse(jsonText);
  if (tempData.temperature > 30) {
    tempData.status = "High";
  } else {
    tempData.status = "Low";
  }

  return tempData;
}

var data = checkTemperature(jsonText);
console.log(data);
