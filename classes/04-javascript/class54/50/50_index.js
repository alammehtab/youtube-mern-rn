function setAreaName() {
  var zipCode = +document.getElementById("zipcode").value;
  var area = document.getElementById("area");

  // we've chosen different areas in Islamabad
  // 45200 -> Golra
  // 44210 -> Islamabad F-7 Markaz
  // 44320 -> Islamabad Federal Board
  // 44310 -> Islamabad Allama Iqbal Open University
  // *     -> Invalid zipcode

  if (zipCode === 45200) {
    area.value = "Golra";
  } else if (zipCode === 44210) {
    area.value = "Islamabad F-7 Markaz";
  } else if (zipCode === 44320) {
    area.value = "Islamabad Federal Board"
  } else if (zipCode === 44310) {
    area.value = "Islamabad Allama Iqbal Open University"
  } else {
    alert("Invalid zipcode");
  }
}
