let playlist = [
    "media/Eminem - Mockingbird.mp3",
    "media/Michael jackson - Beat It.mp3",
    "media/Eine Kleine Nachtmusik - Mozart.mp3",
    "media/Tony Rebel - If Jah.mp3",
    "media/Peyton Parrish - Valhalla Calling.mp3",
    "media/Billie Eilish - bad guy.mp3",
    "media/song land.mp3",
    "media/Eminem - Lose Yourself.mp3",
    "media/Eminem - Rap God.mp3",
    "media/Eminem - Without Me.mp3",
    "media/Eminem - The Real Slim Shady.mp3",
    "media/Michael Jackson - Smooth Criminal.mp3",
    "media/Michael Jackson - They Dont Care About Us.mp3",
    "media/Peyton Parrish - Drengr Of Ragnarok.mp3",
    "media/SKÅL! by Miracle Of Sound.mp3",
    "media/Onwards We Row.mp3",
    "media/Billie Eilish - Ocean Eyes.mp3",
  ];
  let mysound = document.getElementById("mysound");
  let audioSource = document.getElementById("audio-source");
  let btn = document.getElementById("play");
  let icon = document.getElementById("icon");
  let bars = document.getElementById("bars");

  btn.onclick = function () {
    if (mysound.paused) {
      let randomIndex = Math.floor(Math.random() * playlist.length);
      let barsHue = Math.floor(Math.random() * 360);
      audioSource.src = playlist[randomIndex];
      mysound.load();
      mysound.play();
      icon.src = "assets/pause-btn.png";
      bars.style =
        `position: absolute; right: 0%; bottom: 0px; filter: hue-rotate(${barsHue}deg); opacity: 0.3; width: 100%; z-index: -1;`;
    } else {
      mysound.pause();
      icon.src = "assets/play-btn.png";
      bars.style = "display:none";
    }
  };