function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId + '-section');
    selectedSection.style.display = 'block';

    // Update active tab
    const tabs = document.querySelectorAll('.tabs a');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(sectionId + '-tab').classList.add('active');
}