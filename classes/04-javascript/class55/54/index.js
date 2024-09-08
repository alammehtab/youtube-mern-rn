function swapImage(newImageSrc, clickedThumbnail) {
  var mainImage = document.getElementById("mainImage");
  // swap images
  mainImage.src = newImageSrc;

  // Remove 'active' class from all thumbnails
  var images = document.querySelectorAll(".gallery img");
  // getElementById vs querySelector vs querySelectorAll
  // images.forEach(img => img.classList.remove("active"));
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove("active")
  }

  // Add 'active' class to the clicked thumbnail
  clickedThumbnail.classList.add("active");
}