function generateCityName() {
  const zipCode = +document.getElementById("zipcode").value;
  const sheher = document.getElementById("sheher");

  if (zipCode === 25180) {
    sheher.value = "Afghan Colony";
  } else if (zipCode === 24731) {
    sheher.value = "Ali Masjid";
  } else {
    alert("sahi se daal zipcode");
  }
}
