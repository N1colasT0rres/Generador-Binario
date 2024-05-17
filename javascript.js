function textToBinary(text) {
  return text.split('').map(char => {
      return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}

function binaryToText(binary) {
  return binary.split(' ').map(bin => {
      return String.fromCharCode(parseInt(bin, 2));
  }).join('');
}

document.getElementById('toBinaryBtn').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value.trim();
  if (inputText) {
      const binary = textToBinary(inputText);
      document.getElementById('outputText').value = binary;
  } else {
      document.getElementById('outputText').value = '';
  }
});

document.getElementById('toTextBtn').addEventListener('click', function() {
  const inputBinary = document.getElementById('inputText').value.trim();
  if (inputBinary) {
      const text = binaryToText(inputBinary);
      document.getElementById('outputText').value = text;
  } else {
      document.getElementById('outputText').value = '';
  }
});
