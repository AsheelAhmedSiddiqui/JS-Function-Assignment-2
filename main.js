function greeting() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let para = document.getElementById("para").innerText;
  document.getElementById(
    "para"
  ).innerText = `Assalamualikum ${firstName} ${lastName}`;
}
