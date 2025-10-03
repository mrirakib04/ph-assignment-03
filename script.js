/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
if (0 < area && area <= 10 ** 9) {
  var result1 = area / 2;
  console.log(result1);
}

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (0 < money && money <= 10 ** 9) {
  if (money >= 25000) {
    console.log("Laptop");
  } else if (10000 <= money && money < 25000) {
    console.log("Cycle");
  } else {
    console.log("Chocolate");
  }
}
