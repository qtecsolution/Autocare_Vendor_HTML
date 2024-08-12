function focusFirstInput() {
  document.getElementById("otp-1").focus();
}

function moveToNext(current, nextFieldID) {
  if (current.value.length === 1) {
    document.getElementById(nextFieldID).focus();
  }
}

function moveToPrevious(current, previousFieldID) {
  if (current.value.length === 0 && previousFieldID !== "otp-0") {
    document.getElementById(previousFieldID).focus();
  }
}

document.querySelectorAll(".otp-input").forEach((input, index) => {
  input.addEventListener("keyup", function (event) {
    const nextFieldID = `otp-${index + 2}`;
    const previousFieldID = `otp-${index}`;

    if (event.key === "Backspace") {
      moveToPrevious(input, previousFieldID);
    } else {
      moveToNext(input, nextFieldID);
    }
  });
});

function submitCode() {
  document.querySelector("button").focus();
}

function resendCode() {
  alert("Resend code clicked");
}

// function verifyCode() {
//   alert("Verify button clicked");
// }
