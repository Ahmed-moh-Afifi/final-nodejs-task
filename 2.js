var str = "Hello, World!";

function toupper(str) {
  str = str.toUpperCase();
  if (str.length > 10) {
    return str + "(truncated)";
  } else {
    return str;
  }
}

console.log(toupper(str));
