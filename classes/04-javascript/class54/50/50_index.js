function setCityName() {
  var zipCode = +document.getElementById("zipcode").value;
  var sheher = document.getElementById("sheher");

  if (zipCode === 25180) {
    sheher.value = "Afghan Colony";
  } else if (zipCode === 24731) {
    sheher.value = "Ali Masjid";
  } else {
    alert("Invalid zipcode");
  }
}
