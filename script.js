let passLen = 12
let mainEl = document.querySelector('.main');
let passwordEl = document.querySelector('.password')

passwordEl.setAttribute('placeholder', 'generate passworde');
passwordEl.addEventListener('keypress', (e) => {
  e.preventDefault();
})
passwordEl.addEventListener('focus', () => {
  navigator.clipboard.writeText(passwordEl.value);
});

let copyBtn = document.querySelector('.copy-btn');
copyBtn.classList.add('password-button');
copyBtn.innerText = 'Copy';
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordEl.value);
})

let generateBtn = document.querySelector('.generte-btn')
generateBtn.addEventListener('click', () => {
  let password = generatePassword(passLen);
  passwordEl.value = password;
});

function generatePassword(passwordLength) {
  const numberChars = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const symbolChars = "!@#$%^&*()_+";
  const allChars = numberChars + upperChars + lowerChars + symbolChars; 

  let randomString = '';

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length);
    randomString += allChars[randomNumber];
  }

  return randomString;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);