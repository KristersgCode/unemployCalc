function calcAvarage() {
  let salaryOne = parseFloat(document.getElementById("calc-avarage1").value);
  let salaryTwo = parseFloat(document.getElementById("calc-avarage2").value);
  let salaryThree = parseFloat(document.getElementById("calc-avarage3").value);

  let calcAvarages = (salaryOne + salaryTwo + salaryThree) / 3;
  document.getElementById("result").value = calcAvarages;

  document.getElementById("0.75").value = calcAvarages * 0.75;

  document.getElementById("0.5").value = calcAvarages * 0.5;

  document.getElementById("0.45").value = calcAvarages * 0.45;

  //validate input
  // if (document.querySelectorAll(".alert").value.length == 0) {
  //   alert("Please enter value for month 1");
  //  }
}

function validateForm() {
  let a = document.forms["Form"]["answer_a"].value;
  let b = document.forms["Form"]["answer_b"].value;
  let c = document.forms["Form"]["answer_c"].value;
  if (!a || !b || !c) {
    alert("Please Fill All Required Fields");
    return false;
  }
}
