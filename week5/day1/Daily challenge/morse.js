const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
  "6": "-....", "7": "--...", "8": "---..", "9": "----.", "a": ".-", "b": "-...", "c": "-.-.",
  "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-",
  "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...",
  "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", "-": "-....-", "/": "-..-.",
  "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) {
      reject("Morse object is empty.");
    } else {
      resolve(morseObj);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Enter a word or sentence:").toLowerCase();
    const translation = [];

    for (let char of input) {
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Character "${char}" not supported.`);
        return;
      }
    }

    resolve(translation);
  });
}

function joinWords(morseTranslation) {
  const output = document.getElementById("output");
  output.textContent = morseTranslation.join('\n');
}

function startTranslation() {
  toJs()
    .then(toMorse)
    .then(joinWords)
    .catch(error => {
      document.getElementById("output").textContent = " Error: " + error;
    });
}
