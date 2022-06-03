function calcAvarage() {
  let salaryOne = parseFloat(document.getElementById("calc-avarage1").value);
  let salaryTwo = parseFloat(document.getElementById("calc-avarage2").value);
  let salaryThree = parseFloat(document.getElementById("calc-avarage3").value);

  let calcAvarages = (salaryOne + salaryTwo + salaryThree) / 3;
  console.log(calcAvarages);
  document.getElementById("result").value = calcAvarages;
}

function passvalues() {
  let result = calcAvarage();
  localStorage.setItem("textvalue", restult);
  return false;
}
