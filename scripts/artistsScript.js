let eminemAudio = document.getElementById("eminem-audio");
      let eminemBtn = document.getElementById("eminem");
      let eminemBars = document.getElementById("eminem-bars");
      let beatIt = document.getElementById("beat-it");
      let beatItAudio = document.getElementById("beat-it-audio");
      let beatItBars = document.getElementById("beat-it-bars");
      let mozartBtn = document.getElementById("mozart");
      let mozartAudio = document.getElementById("mozart-audio");
      let mozartBars = document.getElementById("mozart-bars");
      let tonyBtn = document.getElementById("tony");
      let tonyAudio = document.getElementById("tony-audio");
      let tonyBars = document.getElementById("tony-bars");
      let peytonBtn = document.getElementById("peyton");
      let peytonAudio = document.getElementById("peyton-audio");
      let peytonBars = document.getElementById("peyton-bars");
      let billieBtn = document.getElementById("billie");
      let billieAudio = document.getElementById("billie-audio");
      let billieBars = document.getElementById("billie-bars");

      eminemAudio.load();
      eminemAudio.currentTime = 85.3;
      beatItAudio.load();
      beatItAudio.currentTime = 100;
      mozartAudio.load();
      mozartAudio.currentTime = 101.5;
      tonyAudio.load();
      tonyAudio.currentTime = 25;
      peytonAudio.load();
      peytonAudio.currentTime = 1.5;
      billieAudio.load();
      billieAudio.currentTime = 56;

      eminemBtn.onmouseover = function () {
        eminemBars.className = "";
        eminemAudio.play();
      };
      eminemBtn.onmouseout = function () {
        eminemBars.className = "d-none";
        eminemAudio.pause();
      };
      eminemBtn.onclick = function () {
        eminemAudio.currentTime = 85.3;
      };

      beatIt.onmouseover = function () {
        beatItBars.className = "";
        beatItAudio.play();
      };
      beatIt.onmouseout = function () {
        beatItBars.className = "d-none";
        beatItAudio.pause();
      };
      beatIt.onclick = function () {
        beatItAudio.currentTime = 100;
      };

      mozartBtn.onmouseover = function () {
        mozartBars.className = "";
        mozartAudio.play();
      };
      mozartBtn.onmouseout = function () {
        mozartBars.className = "d-none";
        mozartAudio.pause();
      };
      mozartBtn.onclick = function () {
        mozartAudio.currentTime = 101.5;
      };

      tonyBtn.onmouseover = function () {
        tonyBars.className = "";
        tonyAudio.play();
      };
      tonyBtn.onmouseout = function () {
        tonyBars.className = "d-none";
        tonyAudio.pause();
      };
      tonyBtn.onclick = function () {
        tonyAudio.currentTime = 25;
      };

      peytonBtn.onmouseover = function () {
        peytonBars.className = "";
        peytonAudio.play();
      };
      peytonBtn.onmouseout = function () {
        peytonBars.className = "d-none";
        peytonAudio.pause();
      };
      peytonBtn.onclick = function () {
        peytonAudio.currentTime = 1.5;
      };

      billieBtn.onmouseover = function () {
        billieBars.className = "";
        billieAudio.play();
      };
      billieBtn.onmouseout = function () {
        billieBars.className = "d-none";
        billieAudio.pause();
      };
      billieBtn.onclick = function () {
        billieAudio.currentTime = 30;
      };