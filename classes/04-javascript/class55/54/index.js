function swapImage(newImageSrc, clickedThumbnail) {
  var mainImage = document.getElementById("mainImage");
  // swap images
  mainImage.src = newImageSrc;

  // Remove 'active' class from all thumbnails
  var thumbnails = document.querySelectorAll(".gallery img");
  // thumbnails.forEach(img => img.classList.remove("active"));
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active")
  }

  // Add 'active' class to the clicked thumbnail
  clickedThumbnail.classList.add("active");
}