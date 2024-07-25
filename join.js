document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.jotform-form');
  const sections = form.querySelectorAll('.form-section');
  let currentSection = 0;

  function showSection(sectionIndex) {
    sections.forEach((section, index) => {
      if (index === sectionIndex) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  function updateNavButtons() {
    const backButtons = form.querySelectorAll('.form-nav-button.back');
    const nextButtons = form.querySelectorAll('.form-nav-button.next');
    const submitButton = form.querySelector('.form-submit-button');

    backButtons.forEach(button => {
      button.style.display = currentSection === 0 ? 'none' : 'inline-block';
    });

    nextButtons.forEach(button => {
      button.style.display = currentSection === sections.length - 1 ? 'none' : 'inline-block';
    });

    if (submitButton) {
      submitButton.style.display = currentSection === sections.length - 1 ? 'inline-block' : 'none';
    }
  }

  form.addEventListener('click', function(e) {
    if (e.target.classList.contains('form-nav-button')) {
      e.preventDefault();
      if (e.target.classList.contains('next')) {
        currentSection = Math.min(currentSection + 1, sections.length - 1);
      } else if (e.target.classList.contains('back')) {
        currentSection = Math.max(currentSection - 1, 0);
      }
      showSection(currentSection);
      updateNavButtons();
    }
  });

  // Initialize the form
  showSection(currentSection);
  updateNavButtons();
});