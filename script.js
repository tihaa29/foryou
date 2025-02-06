// Music-related variables
const musicSound = new Audio('Aku_Memilihmu.mp3');  // Specify the music file
musicSound.loop = true;  // Loop the music indefinitely
let isMusicOn = false;  // Initially set to false, meaning music is off

// Function to toggle music on and off
function toggleMusic() {
    const musicBtn = document.getElementById('music');  // Button element for toggling music
    if (isMusicOn) {
        musicSound.pause();  // Pause the music
        musicBtn.style.backgroundImage = "url('https://img.icons8.com/ios/452/volume-mute.png')";  // Change button to mute state
    } else {
        musicSound.play().catch(error => {
            console.log("Error playing music:", error);
            alert("Please allow audio to play.");
        });  // Play the music with error handling
        musicBtn.style.backgroundImage = "url('https://img.icons8.com/ios/452/play.png')";  // Change button to play state
    }
    isMusicOn = !isMusicOn;  // Toggle the music state
}

// Show the heartfelt message when the floating icon is clicked
function showMessage() {
    const messageBox = document.getElementById('message-box');
    messageBox.style.display = 'block';  // Display the message box
}
