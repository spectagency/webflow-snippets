document.addEventListener("DOMContentLoaded", function() {
  // Select all <a> elements on the page
  const links = document.querySelectorAll("a");
  
  links.forEach(link => {
    // Check if the url inside href ends with ?target=_blank
    const href = link.href;
        if (href.endsWith("?target=_blank")) {
          // Add the target="_blank" attribute to the <a> element
          link.setAttribute("target", "_blank");

          // Remove the ?target=_blank from the url
          link.href = href.replace("?target=_blank", "");
        }
    });
});
