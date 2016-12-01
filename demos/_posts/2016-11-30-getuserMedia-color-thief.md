---
layout: post-demos
title: getUserMedia get Dominant Colour
published: true
category: demos
custom-script: [<script src="/js/color-thief.js"></script><script src="/js/getUserMedia-color-thief.js"></script>]
---
<style>

#photo, 
#video {
  width: 320px;
  height: 240px;
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
}

#photo {
  margin: 0;
}

#canvas {
  display: none;
}

.camera,
.output {
  width: 340px;
}

#startbutton {
  display:block;
  position:relative;
  margin-left:auto;
  margin-right:auto;
  bottom:32px;
  background-color: rgba(0, 150, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  font-family: "Lucida Grande", "Arial", sans-serif;
  color: rgba(255, 255, 255, 1.0);
}

</style>
<p>Taken from a MDN article about webrtc, I used this to take a photo. Once the photo has been taken I will get the dominant colour using color-thief and set the background colour with this.</p>
<div class="camera">
<video id="video">Video stream not available.</video>
<button id="startbutton">Take photo</button> 
</div>
<canvas id="canvas">
</canvas>
<div class="output">
<img id="photo" alt="The screen capture will appear in this box."> 
</div>
<p>
	Visit our article <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos"> Taking still photos with WebRTC</a> to learn more about the technologies used here.
</p>
