//=================== First approach ==============//

// const form = document.getElementById("signupForm");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const confirmPasswordInput = document.getElementById("confirmPassword");
// // const submitBtn = document.getElementById("submitBtn");

// form.addEventListener("submit", function (event) {
//   let isValid = true;

//   // Reset previous error messages
//   const errorFields = document.querySelectorAll(".error");
//   errorFields.forEach(function (errorField) {
//     errorField.textContent = "";
//   });

//   // Validate Name
//   if (nameInput.value.trim() === "") {
//     document.getElementById("nameError").textContent = "Name is required";
//     isValid = false;
//   }

//   // Validate Email
//   if (!emailInput.value.trim().match(/^\S+@\S+\.\S+$/)) {
//     document.getElementById("emailError").textContent = "Enter a valid email";
//     isValid = false;
//   }

//   // Validate Password
//   if (passwordInput.value.length < 8) {
//     document.getElementById("passwordError").textContent =
//       "Password must be at least 8 characters long";
//     isValid = false;
//   }

//   // Validate Confirm Password
//   if (confirmPasswordInput.value !== passwordInput.value) {
//     document.getElementById("confirmPasswordError").textContent =
//       "Passwords do not match";
//     isValid = false;
//   }

//   // Redirect to success page if all validations pass
//   if (isValid) {
//     console.log("Successfully Submitted");
//     // function submitData() {
//     //   window.location.href("./success.html");
//     // }
//   }

//   // Prevent form submission if validation fails
//   if (!isValid) {
//     event.preventDefault();
//   }
// });

// //================== Second approach================//

// // document
// //   .getElementById("signupForm")
// //   .addEventListener("submit", function (event) {
// //     // Reset previous error messages
// //     const errorFields = document.querySelectorAll(".error");
// //     errorFields.forEach(function (errorField) {
// //       errorField.textContent = "";
// //     });

// //     // Validate Name
// //     const nameInput = document.getElementById("name");
// //     if (nameInput.value.trim() === "") {
// //       document.getElementById("nameError").textContent = "Name is required";
// //       event.preventDefault();
// //       return; // Stop further execution if validation fails
// //     }

// //     // Validate Email
// //     const emailInput = document.getElementById("email");
// //     if (!emailInput.value.trim().match(/^\S+@\S+\.\S+$/)) {
// //       document.getElementById("emailError").textContent = "Enter a valid email";
// //       event.preventDefault();
// //       return; // Stop further execution if validation fails
// //     }

// //     // Validate Password
// //     const passwordInput = document.getElementById("password");
// //     if (passwordInput.value.length < 8) {
// //       document.getElementById("passwordError").textContent =
// //         "Password must be at least 8 characters long";
// //       event.preventDefault();
// //       return; // Stop further execution if validation fails
// //     }

// //     // Validate Confirm Password
// //     const confirmPasswordInput = document.getElementById("confirmPassword");
// //     if (confirmPasswordInput.value !== passwordInput.value) {
// //       document.getElementById("confirmPasswordError").textContent =
// //         "Passwords do not match";
// //       event.preventDefault();
// //       return; // Stop further execution if validation fails
// //     }
// //     // If all validations pass, redirect to the success page
// //     console.log("form was submitted");
// //     window.location.href = "./success.html";
// //   });

// // Third approach

// const form = document.getElementById("signupForm");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const confirmPasswordInput = document.getElementById("confirmPassword");

// form.addEventListener("submit", function (event) {
//   let isValid = true;

//   // Reset previous error messages
//   const errorFields = document.querySelectorAll(".error");
//   errorFields.forEach(function (errorField) {
//     errorField.textContent = "";
//   });

//   // Validate Name
//   if (nameInput.value.trim() === "") {
//     document.getElementById("nameError").textContent = "Name is required";
//     isValid = false;
//   }

//   // Validate Email
//   if (!emailInput.value.trim().match(/^\S+@\S+\.\S+$/)) {
//     document.getElementById("emailError").textContent = "Enter a valid email";
//     isValid = false;
//   }

//   // Validate Password
//   if (passwordInput.value.length < 8) {
//     document.getElementById("passwordError").textContent =
//       "Password must be at least 8 characters long";
//     isValid = false;
//   }

//   // Validate Confirm Password
//   if (confirmPasswordInput.value !== passwordInput.value) {
//     document.getElementById("confirmPasswordError").textContent =
//       "Passwords do not match";
//     isValid = false;
//   }

//   // Redirect to success page if all validations pass
//   if (isValid) {
//     // Call the submitData function
//     submitData();
//   }

//   // Prevent form submission if validation fails
//   if (!isValid) {
//     event.preventDefault();
//   }
// });

// // Define the submitData function outside the event listener
// function submitData() {
//   console.log("Successfully Submitted");
//   window.location.href = "./success.html";
// }

// Fourth method
// document.addEventListener("DOMContentLoaded", function () {
//   // Define the submitData function before adding the event listener
//   function submitData() {
//     console.log("Submit form data is called");
//     console.log("Successfully Submitted");
//     window.location.href = "success.html";
//   }

//   const form = document.getElementById("signupForm");
//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");
//   const confirmPasswordInput = document.getElementById("confirmPassword");

//   form.addEventListener("submit", function (event) {
//     let isValid = true;

//     // Reset previous error messages
//     const errorFields = document.querySelectorAll(".error");
//     errorFields.forEach(function (errorField) {
//       errorField.textContent = "";
//     });

//     // Validate Name
//     if (nameInput.value.trim() === "") {
//       document.getElementById("nameError").textContent = "Name is required";
//       isValid = false;
//     }

//     // Validate Email
//     if (!emailInput.value.trim().match(/^\S+@\S+\.\S+$/)) {
//       document.getElementById("emailError").textContent = "Enter a valid email";
//       isValid = false;
//     }

//     // Validate Password
//     if (passwordInput.value.length < 8) {
//       document.getElementById("passwordError").textContent =
//         "Password must be at least 8 characters long";
//       isValid = false;
//     }

//     // Validate Confirm Password
//     if (confirmPasswordInput.value !== passwordInput.value) {
//       document.getElementById("confirmPasswordError").textContent =
//         "Passwords do not match";
//       isValid = false;
//     }

//     // Redirect to success page if all validations pass
//     if (isValid) {
//       // Call the submitData function
//       submitData();
//     } else {
//       // Prevent form submission if validation fails
//       event.preventDefault();
//     }
//   });
// });


// The Fift approach

document.addEventListener("DOMContentLoaded", function () {
  // Define the submitData function before adding the event listener
  function submitData() {
    console.log("submitData function is called");
    console.log("Successfully Submitted");
    window.location.href = "success.html"; // Redirect to success page
  }

  const form = document.getElementById("signupForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    let isValid = true;

    // Reset previous error messages
    const errorFields = document.querySelectorAll(".error");
    errorFields.forEach(function (errorField) {
      errorField.textContent = "";
    });

    // Validate Name
    if (nameInput.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim().match(/^\S+@\S+\.\S+$/)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      isValid = false;
    }

    // Validate Password
    if (passwordInput.value.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters long";
      isValid = false;
    }

    // Validate Confirm Password
    if (confirmPasswordInput.value !== passwordInput.value) {
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match";
      isValid = false;
    }

    // Redirect to success page if all validations pass
    if (isValid) {
      submitData(); // Call the submitData function for redirection
    }
  });
});
