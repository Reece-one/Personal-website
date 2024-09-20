window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navMain a');

    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
});

function checkDate() {
let selectedDateStart = new Date(document.getElementById('dateOfStart').value);
let selectedDateEnd = new Date(document.getElementById('dateOfEnd').value);
let today = new Date();

if (selectedDateStart <= today) {
    document.getElementById('dateOfStart').setCustomValidity('Please select a day at least 1 day into the future.');
} else {
    document.getElementById('dateOfStart').setCustomValidity('');
}

if (selectedDateEnd <= today) {
    document.getElementById('dateOfEnd').setCustomValidity('Please select a day at least 1 day into the future.');
} else {
    document.getElementById('dateOfEnd').setCustomValidity('');
}
}

function checkEmail() {
    let eMail = document.getElementById('eMail').value;
    let confirm = document.getElementById('confirmEmail').value;

    if (eMail !== confirm) {
        document.getElementById('confirmEmail').setCustomValidity('Emails do not match.');
    } else {
        document.getElementById('confirmEmail').setCustomValidity('');
    }
}


function validateForm() {
  let formName = document.getElementById('name').value;
  let formEmail = document.getElementById('eMail').value;
  let formPhone = document.getElementById('phone').value;
  let formContact = document.getElementById('preferred').value;
  let formHelp = document.getElementById('help').value;
  let formStartDate = document.getElementById('dateOfStart').value;
  let formEndDate = document.getElementById('dateOfEnd').value;

  let confirmationMessage = "Confirm the following details:\n\n To 220087944@aston.ac.uk \n";
  confirmationMessage += "Name: " + formName + "\n";
  confirmationMessage += "Email: " + formEmail + "\n";

  if (formPhone) {
    confirmationMessage += "Phone number: " + formPhone + "\n";
  }
  confirmationMessage += "Preferred contact: " + formContact + "\n";
  confirmationMessage += "Message: " + formHelp + "\n";

  if (formStartDate) {
    confirmationMessage += "Enquired timeframe: " + formStartDate + " - " + formEndDate  + "\n";
  }
  var isConfirmed = confirm(confirmationMessage);
  return isConfirmed;
}

