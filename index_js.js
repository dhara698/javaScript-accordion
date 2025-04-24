function accordion_toggle(id) {
    const section = document.getElementById(id);
  
    // Toggle 'active' class to show/hide the section
    section.classList.toggle("active");
  
    // Optional: Hide other sections if only one should be open
    const allSections = document.querySelectorAll(".accordion-section");
    allSections.forEach((el) => {
      if (el.id !== id) {
        el.classList.remove("active");
      }
    });
  }
  