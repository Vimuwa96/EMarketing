$(document).ready(function () {
  // Function to start the SVG animation
  function startSvgAnimation() {
    // Find the SVG element with the class 'svg-animation'
    const svgElement = document.querySelector(".svg-animation");

    // Start the animation by triggering the 'begin' attribute
    svgElement.querySelector(".animate-svg-stroke-1").beginElement();
  }

  // Use Intersection Observer to detect when the SVG element is in the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the SVG element is in the viewport, start the animation
        startSvgAnimation();
        // Stop observing once the animation has started
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe the SVG element
  observer.observe(document.querySelector(".svg-animation"));
});
