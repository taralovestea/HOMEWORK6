var input = document.getElementById('savedata').value;
var storedValue = localStorage.getItem("input-text");
localStorage.setItem('input-text', input);