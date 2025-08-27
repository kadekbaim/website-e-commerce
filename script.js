// Navbar aktif saat scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Pratinjau gambar upload
const inputFile = document.getElementById("formFile");
const preview = document.getElementById("preview");
if (inputFile && preview) {
  inputFile.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.setAttribute("src", e.target.result);
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });
}
