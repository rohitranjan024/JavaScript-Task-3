function validateForm(event) {
    event.preventDefault();

    // Reset error messages
    clearErrors();

    // Get form inputs
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var websiteInput = document.getElementById("website");
    var messageInput = document.getElementById("message");

    // Validate inputs
    if (nameInput.value.trim() === "") {
      displayError("nameError", "This field is required.");
    }

    if (emailInput.value.trim() === "") {
      displayError("emailError", "A valid email address is required.");
    }

    if (websiteInput.value.trim() === "") {
      displayError("websiteError", "A valid url is required.");
    }

    if (messageInput.value.trim() === "") {
      displayError("messageError", "This field is required.");
    }
  }

  function displayError(elementId, errorMessage) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
  }

  function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }
  }

  var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].classList.remove("input-error");
    }


    function clearBorders() {
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].classList.remove("error-border");
        }
      }