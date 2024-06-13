var catVideoButton = document.getElementById('catVideo');
var dogVideoButton = document.getElementById('dogVideo');
var tigerVideoButton = document.getElementById('tigerVideo');
var closeButton = document.getElementById('closeBtn');
var videoModal = document.getElementById('videoModal');
var blurBackground = document.getElementById('blurBackground');
var catFrame = document.getElementById('catFrame');
var dogFrame = document.getElementById('dogFrame');
var tigerFrame = document.getElementById('tigerFrame');

    catVideoButton.addEventListener('click', function() {
      // Set the YouTube video link for cat
      var catUrl = 'https://www.youtube.com/embed/gK40aqPw1iY?si=0lbufaUCBeMVSr9r';
      catFrame.src = catUrl;


      catFrame.style.display = 'block';
      dogFrame.style.display = 'none';
      tigerFrame.style.display = 'none';
    
      // Show the modal
      videoModal.style.display = 'flex';
    
      // Apply blur effect to the background
      blurBackground.style.zIndex = '0';
      blurBackground.style.backdropFilter = 'blur(10px)';
    });

    dogVideoButton.addEventListener('click', function() {
      // Set the YouTube video link for dog
      var dogUrl = 'https://www.youtube.com/embed/xNdxbfbl4RA?si=9IMIaDu_9nUVA63w';
      dogFrame.src = dogUrl;
    
      catFrame.style.display = 'none';
      dogFrame.style.display = 'block';
      tigerFrame.style.display = 'none';

      // Show the modal
      videoModal.style.display = 'flex';
    
      // Apply blur effect to the background
      blurBackground.style.zIndex = '0';
      blurBackground.style.backdropFilter = 'blur(10px)';
    });

    tigerVideoButton.addEventListener('click', function() {
        // Set the YouTube video link for dog
        var tigerUrl = 'https://www.youtube.com/embed/r8eFRI0WMZk?si=i-m6jthgG19W2BXz';
        tigerFrame.src = tigerUrl;
      
        catFrame.style.display = 'none';
        dogFrame.style.display = 'none';
        tigerFrame.style.display = 'block';
  
  
        // Show the modal
        videoModal.style.display = 'flex';
      
        // Apply blur effect to the background
        blurBackground.style.zIndex = '0';
        blurBackground.style.backdropFilter = 'blur(10px)';
      });

    closeButton.addEventListener('click', function() {
      // Pause the videos by resetting the src attribute
      catFrame.src = '';
      dogFrame.src = '';
      tigerFrame.src = '';
    
      // Hide the modal
      videoModal.style.display = 'none';
    
      // Remove blur effect from the background
      blurBackground.style.zIndex = '-1';
      blurBackground.style.backdropFilter = 'blur(0px)';
    });