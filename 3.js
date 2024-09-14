var sensorReading = 122;
var threshold = 500;

function filterReading(reading, threshold) {
  return reading > threshold ? reading : null;
}

var filteredReading = filterReading(sensorReading, threshold);
console.log(filteredReading);
