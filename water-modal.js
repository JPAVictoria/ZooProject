var whaleFrame = document.getElementById('whaleFrame');
var dolphinFrame = document.getElementById('dolphinFrame');
var penguinFrame = document.getElementById('penguinFrame');
var whaleVideoButton = document.getElementById('whaleVideo');
var dolphinVideoButton = document.getElementById('dolphinVideo');
var penguinVideoButton = document.getElementById('penguinVideo');
var closeButton = document.getElementById('closeBtn');
var videoModal = document.getElementById('videoModal');
var blurBackground = document.getElementById('blurBackground');


penguinVideoButton.addEventListener('click', function() {
    var penguinUrl = 'https://www.youtube.com/embed/wfYLmxIJKRw?si=h0INWJxTDVVME0Ow';
    penguinFrame.src = penguinUrl;

    
    penguinFrame.style.display = 'block';
    whaleFrame.style.display = 'none';
    dolphinFrame.style.display = 'none';

    // Show the modal
    videoModal.style.display = 'flex';
  
    // Apply blur effect to the background
    blurBackground.style.zIndex = '0';
    blurBackground.style.backdropFilter = 'blur(10px)';
  });

  whaleVideoButton.addEventListener('click', function() {
    var whaleUrl = 'https://www.youtube.com/embed/RA4GZ1OL1cc?si=62ORFTc0iNx0dCFF';
    whaleFrame.src = whaleUrl;

    
    penguinFrame.style.display = 'none';
    whaleFrame.style.display = 'block';
    dolphinFrame.style.display = 'none';

    // Show the modal
    videoModal.style.display = 'flex';
  
    // Apply blur effect to the background
    blurBackground.style.zIndex = '0';
    blurBackground.style.backdropFilter = 'blur(10px)';
  });

  dolphinVideoButton.addEventListener('click', function() {

    var dolphinUrl = 'https://www.youtube.com/embed/ZHvcF2cJRYM?si=FSROotIwJ9-XsJbv';
    dolphinFrame.src = dolphinUrl;

    
    penguinFrame.style.display = 'none';
    whaleFrame.style.display = 'none';
    dolphinFrame.style.display = 'block';

    // Show the modal
    videoModal.style.display = 'flex';
  
    // Apply blur effect to the background
    blurBackground.style.zIndex = '0';
    blurBackground.style.backdropFilter = 'blur(10px)';
  });

  closeButton.addEventListener('click', function() {
    // Pause the videos by resetting the src attribute
    penguinFrame.src = '';
    whaleFrame.src = '';
    dolphinFrame.src = '';
  
    // Hide the modal
    videoModal.style.display = 'none';
  
    // Remove blur effect from the background
    blurBackground.style.zIndex = '-1';
    blurBackground.style.backdropFilter = 'blur(0px)';
  });