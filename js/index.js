function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
  
    // Display the selected section
    var selectedSection = document.getElementById(sectionId + "-section");
    selectedSection.style.display = "block";
  
    // Update tab appearance (optional)
    var tabs = document.getElementsByClassName("tabs")[0].children;
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active"); 
    }
    document.getElementById(sectionId + "-tab").classList.add("active"); 
  }