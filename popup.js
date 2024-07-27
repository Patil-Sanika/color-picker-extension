document.addEventListener('DOMContentLoaded', function() {
  //selecting elements 
  const colorInput = document.getElementById('colorInput');
  const colorPreview = document.getElementById('colorPreview');
  const colorValue = document.getElementById('colorValue');
  const copyButton = document.getElementById('copyButton');

  //this is take a color input
  colorInput.addEventListener('input', function() {
    const color = colorInput.value;
    colorPreview.style.backgroundColor = color;
    colorValue.value = color;
  });

  copyButton.addEventListener('click', function() {
    colorValue.select();
    document.execCommand('copy');
    // Optionally provide user feedback or confirmation
    alert('Color copied to clipboard!');
  });
});

