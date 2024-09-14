function greeting() {
  var currentTime = new Date().getHours();
  var greeting;
  if (currentTime >= 0 && currentTime < 12) {
    greeting = "Good morning!";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return greeting;
}

console.log(greeting());
