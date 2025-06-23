document.addEventListener("scroll", function () {
    // Définissez la hauteur à partir de laquelle l'élément sera supprimé
    const triggerHeight = 3800; // En pixels
    const element = document.getElementById("remove");

    // Vérifiez si l'utilisateur a dépassé la hauteur spécifiée
    if (window.scrollY > triggerHeight && element) {
        element.remove(); // Supprime l'élément
        console.log("L'élément a été supprimé !");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav");
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("open");
    });
  });
