// Dark Mode
document.getElementById('dark-mode').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
});

// Cursor Effects
document.getElementById('cursor-effects').addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('cursor-effects');
  } else {
    document.body.classList.remove('cursor-effects');
  }
});
