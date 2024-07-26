JotForm.newDefaultTheme = true;
JotForm.extendsNewTheme = false;
JotForm.singleProduct = false;
JotForm.newPaymentUIForNewCreatedForms = true;
JotForm.texts = {
    // Copy all the text content from the original file and paste it here
};
JotForm.newPaymentUI = true;
JotForm.originalLanguage = "en";
JotForm.replaceTagTest = true;
JotForm.clearFieldOnHide="disable";
JotForm.submitError="jumpToFirstError";

window.addEventListener('DOMContentLoaded',function(){
    window.brandingFooter.init({
        "formID":242056625768060,
        "campaign":"powered_by_jotform_le",
        "isCardForm":false,
        "isLegacyForm":true,
        "formLanguage":"en"
    });
});

JotForm.init(function(){
    // Copy all the JotForm.init content from the original file and paste it here
});

// Add any other JavaScript functions or code from the original file

// Add these new functions at the end of the file:

function initializeFormNavigation() {
    let currentPage = 0;
    const pages = document.querySelectorAll('.form-section');
    const nextButtons = document.querySelectorAll('.form-pagebreak-next');
    const backButtons = document.querySelectorAll('.form-pagebreak-back');
    const submitButton = document.querySelector('#input_submit');
    const form = document.querySelector('form');

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.style.display = index === pageIndex ? 'block' : 'none';
        });
    }

    function validatePage(pageIndex) {
        // Add your page validation logic here
        return true;
    }

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (validatePage(currentPage)) {
                currentPage++;
                showPage(currentPage);
            }
        });
    });

    backButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
    });

    if (submitButton) {
        submitButton.style.display = 'block';
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // You can add additional form submission logic here
                alert('Form submitted successfully!');
                form.submit();
            }
        });
    }

    // Prevent form submission on enter key
    form.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    });

    // Show the first page initially
    showPage(0);

    // Add event listener to the last question's radio buttons
    const lastQuestionRadios = document.querySelectorAll('input[name="q38_iHave"]');
    lastQuestionRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'Yes' && this.hasAttribute('data-show-submit')) {
                submitButton.style.display = 'block';
                setTimeout(() => submitButton.classList.add('show'), 10);
            } else {
                submitButton.classList.remove('show');
                setTimeout(() => submitButton.style.display = 'none', 300);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initializeFormNavigation, 1000);
});

function enforceInputStyles() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.setProperty('color', '#ffffff', 'important');
        input.style.setProperty('background-color', '#2a2a2a', 'important');
        input.addEventListener('focus', function() {
            this.style.setProperty('color', '#ffffff', 'important');
            this.style.setProperty('background-color', '#333333', 'important');
        });
    });
}

// Call this function after the form is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(enforceInputStyles, 1000);
});

function logInputStyles() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        const computedStyle = window.getComputedStyle(input);
        console.log('Input element:', input);
        console.log('Computed color:', computedStyle.color);
        console.log('Computed background-color:', computedStyle.backgroundColor);
    });
}

// Call this function after a short delay to ensure the form is loaded
setTimeout(logInputStyles, 1000);

function forceInputStyles() {
    const inputs = document.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), textarea, select');
    inputs.forEach(input => {
        input.style.setProperty('color', '#ffffff', 'important');
        input.style.setProperty('-webkit-text-fill-color', '#ffffff', 'important');
        input.style.setProperty('background-color', '#2a2a2a', 'important');
        input.style.setProperty('border', '1px solid #444', 'important');
        
        input.addEventListener('focus', function() {
            this.style.setProperty('color', '#ffffff', 'important');
            this.style.setProperty('-webkit-text-fill-color', '#ffffff', 'important');
            this.style.setProperty('background-color', '#333333', 'important');
        });
    });
}

// Run this function periodically
setInterval(forceInputStyles, 100);

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(forceInputStyles, 1000);
});

function applyCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Aggressively remove highlighting effect on the container */
        .form-line,
        .form-line:hover,
        .form-line.form-line-active,
        .form-line.form-line-active:hover {
            background-color: transparent !important;
            background-image: none !important;
            transition: none !important;
        }

        /* Remove any box-shadow or other effects on the container */
        .form-line,
        .form-line:hover,
        .form-line.form-line-active,
        .form-line.form-line-active:hover {
            box-shadow: none !important;
            border: none !important;
        }

        /* Style for inputs, focused or not */
        .form-textbox,
        .form-textarea,
        .form-dropdown,
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="number"],
        input[type="date"],
        textarea,
        select,
        .form-textbox:focus,
        .form-textarea:focus,
        .form-dropdown:focus,
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        input[type="number"]:focus,
        input[type="date"]:focus,
        textarea:focus,
        select:focus {
            background-color: #2a2a2a !important;
            border: 1px solid #444 !important;
            color: #ffffff !important;
            box-shadow: none !important;
            transition: border-color 0.3s ease !important;
        }

        /* Style for focused inputs */
        .form-textbox:focus,
        .form-textarea:focus,
        .form-dropdown:focus,
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        input[type="number"]:focus,
        input[type="date"]:focus,
        textarea:focus,
        select:focus {
            border-color: #c1121f !important;
            box-shadow: 0 0 0 2px rgba(193, 18, 31, 0.25) !important;
        }

        /* Remove any additional styling on form-input-wide */
        .form-input-wide {
            background: none !important;
            border: none !important;
            box-shadow: none !important;
        }

        /* Submit button */
        .form-submit-button {
            background-color: #c1121f !important;
            color: #ffffff !important;
            padding: 14px 28px !important;
            border: none !important;
            border-radius: 8px !important;
            font-size: 18px !important;
            font-weight: bold !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            margin-top: 20px !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
            display: block !important;
            width: 100% !important;
            max-width: 300px !important;
            margin-left: auto !important;
            margin-right: auto !important;
        }

        .form-submit-button:hover {
            background-color: #e61a2f !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2) !important;
        }

        .form-submit-button:active {
            transform: translateY(0) !important;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
}

// Call this function after a short delay to ensure the form is loaded
setTimeout(applyCustomStyles, 1000);