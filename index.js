let float = 19.4;
function paymentgateway(float) {
  let a = "";
  let c;
  a = float.toString();
  c = a.split(".");
  if (c[1] == undefined) {
    c[0] = c[0] + ".00";
  } else if (c[1].length == 1) {
    c[1] = c[1] + "0";
  } else if (c[1].length == 2) {
    c[1] = c[1];
  }
  return "$" + c;
}

console.log(paymentgateway(float));
