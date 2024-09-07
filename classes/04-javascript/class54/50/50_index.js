function setAreaName() {
  var zipCode = +document.getElementById("zipcode").value;
  var areaEl = document.getElementById("area");

  // we've chosen different areas in Islamabad
  // 45200 -> Golra
  // 44210 -> Islamabad F-7 Markaz
  // 44320 -> Islamabad Federal Board
  // 44310 -> Islamabad Allama Iqbal Open University
  // *     -> Invalid zipcode

  // if (zipCode === 45200) {
  //   areaEl.value = "Golra";
  // } else if (zipCode === 44210) {
  //   areaEl.value = "Islamabad F-7 Markaz";
  // } else if (zipCode === 44320) {
  //   areaEl.value = "Islamabad Federal Board"
  // } else if (zipCode === 44310) {
  //   areaEl.value = "Islamabad Allama Iqbal Open University"
  // } else {
  //   alert("Invalid zipcode");
  // }
}
