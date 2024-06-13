var hawkFrame = document.getElementById('hawkFrame');
var crowFrame = document.getElementById('crowFrame');
var eagleFrame = document.getElementById('eagleFrame');
var hawkVideoButton = document.getElementById('hawkVideo');
var crowVideoButton = document.getElementById('crowVideo');
var eagleVideoButton = document.getElementById('eagleVideo');
var closeButton = document.getElementById('closeBtn');
var videoModal = document.getElementById('videoModal');
var blurBackground = document.getElementById('blurBackground');


crowVideoButton.addEventListener('click', function() {
    var crowUrl = 'https://www.youtube.com/embed/zGKfvz5zrtM?si=CFhTRY_clxRxY1UD';
    crowFrame.src = crowUrl;


    crowFrame.style.display = 'block';
    eagleFrame.style.display = 'none';
    hawkFrame.style.display = 'none';
  
    // Show the modal
    videoModal.style.display = 'flex';
  
    // Apply blur effect to the background
    blurBackground.style.zIndex = '0';
    blurBackground.style.backdropFilter = 'blur(10px)';
  });

  eagleVideoButton.addEventListener('click', function() {
    var eagleUrl = 'https://www.youtube.com/embed/iPwPLPI1L6k?si=nU9VeRne1ZnMCAae';
    eagleFrame.src = eagleUrl;
  
    crowFrame.style.display = 'none';
    eagleFrame.style.display = 'block';
    hawkFrame.style.display = 'none';

    // Show the modal
    videoModal.style.display = 'flex';
  
    // Apply blur effect to the background
    blurBackground.style.zIndex = '0';
    blurBackground.style.backdropFilter = 'blur(10px)';
  });

  hawkVideoButton.addEventListener('click', function() {
      var hawkUrl = 'https://www.youtube.com/embed/IHih8gZZ52g?si=VLAHhDywoiGS0p5r';
      hawkFrame.src = hawkUrl;
    
      crowFrame.style.display = 'none';
      eagleFrame.style.display = 'none';
      hawkFrame.style.display = 'block';


      // Show the modal
      videoModal.style.display = 'flex';
    
      // Apply blur effect to the background
      blurBackground.style.zIndex = '0';
      blurBackground.style.backdropFilter = 'blur(10px)';
    });

  closeButton.addEventListener('click', function() {
    // Pause the videos by resetting the src attribute
    hawkFrame.src = '';
    crowFrame.src = '';
    eagleFrame.src = '';
  
    // Hide the modal
    videoModal.style.display = 'none';
  
    // Remove blur effect from the background
    blurBackground.style.zIndex = '-1';
    blurBackground.style.backdropFilter = 'blur(0px)';
  });