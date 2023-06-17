

var currentAudio

 function playclip(audioElement){
     if (currentAudio){
         currentAudio.pause()
         
     }
  
       currentAudio = audioElement;
       currentAudio.play();
       currentAudio.currentTime = 0;
     
}



