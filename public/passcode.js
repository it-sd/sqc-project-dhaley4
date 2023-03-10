function insertNumber(number) {
  const codeDisplay = document.getElementById('codeDisplay')
  let passcode = codeDisplay.innerText
  if (passcode == 'Awaiting Input...') {
    passcode = number
  } else if (passcode.length < 6) {
    passcode = passcode + number
  }
  codeDisplay.innerHTML = passcode
  console.log(`Inserted number ${number}, making ${passcode}`)
}

function backspace() {
  // get the codeDisplay element using Id, as well as getting the text stored in it
  const codeDisplay = document.getElementById('codeDisplay')
  let passcode = codeDisplay.innerText

  // make sure its not "Awaiting Input...", the default for when no numbers have been entered
  // The passcode would only be this when nothing is entered, so there is nothing to delete
  if (passcode != 'Awaiting Input...') {
    // if passcode length is 1, a backspace makes it zero, so change to default
    // otherwise, make it so the passcode is what it currently is, minus the last character
    if (passcode.length == 1) {
      passcode = 'Awaiting Input...'
    } else (
      passcode = passcode.substring(0, passcode.length - 1)
    )
    // display the new passcode
    codeDisplay.innerText = passcode
  }
}

function submitPasscode() {
  // TODO: Implement this
  // Should check if the passcode is saved anywhere, and if it is, retrieve the associated message, and display it in the large textarea.
  // if there is no message saved for that passcode, prompt the user to submit their own to fill the space.
  const codeDisplay = document.getElementById('codeDisplay')
  let passcode = codeDisplay.innerText
  let outputTextArea = document.getElementById('phraseTextArea')
  if (passcode != 'Awaiting Input...') {
    outputTextArea.textContent += passcode
  }
  // The above code is a placeholder.
}