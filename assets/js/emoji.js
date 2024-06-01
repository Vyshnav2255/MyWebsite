// emoji.js

document.addEventListener('DOMContentLoaded', function() {
    var emojiContainer = document.getElementById('emojiContainer');
    var emojis = ['❤️','😎', '🤔', '😃', '☕️', '😭', '💻', '🪄'];
    var currentIndex = 0;
  
    function changeEmoji() {
      emojiContainer.innerHTML = emojis[currentIndex];
      currentIndex = (currentIndex + 1) % emojis.length;
    }
  
    setInterval(changeEmoji, 700); // Change the emoji every 3 seconds (adjust the interval as needed)
  });