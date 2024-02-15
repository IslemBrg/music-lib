let eminem = document.getElementById("eminem");
      let eminemAudio = document.getElementById("eminem-audio");
      let eminemBars = document.getElementById("eminem-bars");
      let beatIt = document.getElementById("beat-it");
      let beatItAudio = document.getElementById("beat-it-audio");
      let beatItBars = document.getElementById("beat-it-bars");
      let mozart = document.getElementById("mozart");
      let mozartAudio = document.getElementById("mozart-audio");
      let mozartBars = document.getElementById("mozart-bars");
      let tony = document.getElementById("tony");
      let tonyAudio = document.getElementById("tony-audio");
      let tonyBars = document.getElementById("tony-bars");
      let peyton = document.getElementById("peyton");
      let peytonAudio = document.getElementById("peyton-audio");
      let peytonBars = document.getElementById("peyton-bars");
      let billie = document.getElementById("billie");
      let billieAudio = document.getElementById("billie-audio");
      let billieBars = document.getElementById("billie-bars");
      let lose = document.getElementById("lose");
      let loseAudio = document.getElementById("lose-audio");
      let loseBars = document.getElementById("lose-bars");
      let god = document.getElementById("god");
      let godAudio = document.getElementById("god-audio");
      let godBars = document.getElementById("god-bars");
      let without = document.getElementById("without");
      let withoutAudio = document.getElementById("without-audio");
      let withoutBars = document.getElementById("without-bars");
      let slim = document.getElementById("slim");
      let slimAudio = document.getElementById("slim-audio");
      let slimBars = document.getElementById("slim-bars");
      let smooth = document.getElementById("smooth");
      let smoothAudio = document.getElementById("smooth-audio");
      let smoothBars = document.getElementById("smooth-bars");
      let care = document.getElementById("care");
      let careAudio = document.getElementById("care-audio");
      let careBars = document.getElementById("care-bars");
      let ragnarok = document.getElementById("ragnarok");
      let ragnarokAudio = document.getElementById("ragnarok-audio");
      let ragnarokBars = document.getElementById("ragnarok-bars");
      let skal = document.getElementById("skal");
      let skalAudio = document.getElementById("skal-audio");
      let skalBars = document.getElementById("skal-bars");
      let onwards = document.getElementById("onwards");
      let onwardsAudio = document.getElementById("onwards-audio");
      let onwardsBars = document.getElementById("onwards-bars");
      let eyes = document.getElementById("eyes");
      let eyesAudio = document.getElementById("eyes-audio");
      let eyesBars = document.getElementById("eyes-bars");

      eminemAudio.load();
      beatItAudio.load();
      mozartAudio.load();
      tonyAudio.load();
      peytonAudio.load();
      billieAudio.load();
      loseAudio.load();
      godAudio.load();
      withoutAudio.load();
      slimAudio.load();
      smoothAudio.load();
      careAudio.load();
      ragnarokAudio.load();
      skalAudio.load();
      onwardsAudio.load();
      eyesAudio.load();

      eminem.onmouseover = function () {
        eminemAudio.controls = true;
      };
      eminem.onmouseout = function () {
        eminemAudio.controls = false;
      };
      eminem.onclick = function () {
        if (eminemAudio.paused) {
          eminemAudio.play();
        } else {
          eminemAudio.pause();
        }
      };
      eyes.onmouseover = function () {
        eyesAudio.controls = true;
      };
      eyes.onmouseout = function () {
        eyesAudio.controls = false;
      };
      eyes.onclick = function () {
        if (eyesAudio.paused) {
          eyesAudio.play();
        } else {
          eyesAudio.pause();
        }
      };
      onwards.onmouseover = function () {
        onwardsAudio.controls = true;
      };
      onwards.onmouseout = function () {
        onwardsAudio.controls = false;
      };
      onwards.onclick = function () {
        if (onwardsAudio.paused) {
          onwardsAudio.play();
        } else {
          onwardsAudio.pause();
        }
      };
      skal.onmouseover = function () {
        skalAudio.controls = true;
      };
      skal.onmouseout = function () {
        skalAudio.controls = false;
      };
      skal.onclick = function () {
        if (skalAudio.paused) {
          skalAudio.play();
        } else {
          skalAudio.pause();
        }
      };
      ragnarok.onmouseover = function () {
        ragnarokAudio.controls = true;
      };
      ragnarok.onmouseout = function () {
        ragnarokAudio.controls = false;
      };
      ragnarok.onclick = function () {
        if (ragnarokAudio.paused) {
          ragnarokAudio.play();
        } else {
          ragnarokAudio.pause();
        }
      };
      care.onmouseover = function () {
        careAudio.controls = true;
      };
      care.onmouseout = function () {
        careAudio.controls = false;
      };
      care.onclick = function () {
        if (careAudio.paused) {
          careAudio.play();
        } else {
          careAudio.pause();
        }
      };
      smooth.onmouseover = function () {
        smoothAudio.controls = true;
      };
      smooth.onmouseout = function () {
        smoothAudio.controls = false;
      };
      smooth.onclick = function () {
        if (smoothAudio.paused) {
          smoothAudio.play();
        } else {
          smoothAudio.pause();
        }
      };
      slim.onmouseover = function () {
        slimAudio.controls = true;
      };
      slim.onmouseout = function () {
        slimAudio.controls = false;
      };
      slim.onclick = function () {
        if (slimAudio.paused) {
          slimAudio.play();
        } else {
          slimAudio.pause();
        }
      };
      without.onmouseover = function () {
        withoutAudio.controls = true;
      };
      without.onmouseout = function () {
        withoutAudio.controls = false;
      };
      without.onclick = function () {
        if (withoutAudio.paused) {
          withoutAudio.play();
        } else {
          withoutAudio.pause();
        }
      };
      god.onmouseover = function () {
        godAudio.controls = true;
      };
      god.onmouseout = function () {
        godAudio.controls = false;
      };
      god.onclick = function () {
        if (godAudio.paused) {
          godAudio.play();
        } else {
          godAudio.pause();
        }
      };
      lose.onmouseover = function () {
        loseAudio.controls = true;
      };
      lose.onmouseout = function () {
        loseAudio.controls = false;
      };
      lose.onclick = function () {
        if (loseAudio.paused) {
          loseAudio.play();
        } else {
          loseAudio.pause();
        }
      };
      beatIt.onmouseover = function () {
        beatItAudio.controls = true;
      };
      beatIt.onmouseout = function () {
        beatItAudio.controls = false;
      };
      beatIt.onclick = function () {
        if (beatItAudio.paused) {
          beatItAudio.play();
        } else {
          beatItAudio.pause();
        }
      };
      mozart.onmouseover = function () {
        mozartAudio.controls = true;
      };
      mozart.onmouseout = function () {
        mozartAudio.controls = false;
      };
      mozart.onclick = function () {
        if (mozartAudio.paused) {
          mozartAudio.play();
        } else {
          mozartAudio.pause();
        }
      };
      tony.onmouseover = function () {
        tonyAudio.controls = true;
      };
      tony.onmouseout = function () {
        tonyAudio.controls = false;
      };
      tony.onclick = function () {
        if (tonyAudio.paused) {
          tonyAudio.play();
        } else {
          tonyAudio.pause();
        }
      };
      peyton.onmouseover = function () {
        peytonAudio.controls = true;
      };
      peyton.onmouseout = function () {
        peytonAudio.controls = false;
      };
      peyton.onclick = function () {
        if (peytonAudio.paused) {
          peytonAudio.play();
        } else {
          peytonAudio.pause();
        }
      };
      billie.onmouseover = function () {
        billieAudio.controls = true;
      };
      billie.onmouseout = function () {
        billieAudio.controls = false;
      };
      billie.onclick = function () {
        if (billieAudio.paused) {
          billieAudio.play();
        } else {
          billieAudio.pause();
        }
      };

      eminemAudio.onplay = function () {
        eminemBars.className = "";
        localStorage.setItem("played", "eminem-audio");
      };
      eminemAudio.onpause = function () {
        eminemBars.className = "d-none";
      };
      eyesAudio.onplay = function () {
        eyesBars.className = "";
        localStorage.setItem("played", "eyes-audio");
      };
      eyesAudio.onpause = function () {
        eyesBars.className = "d-none";
      };
      onwardsAudio.onplay = function () {
        onwardsBars.className = "";
        localStorage.setItem("played", "onwards-audio");
      };
      onwardsAudio.onpause = function () {
        onwardsBars.className = "d-none";
      };
      skalAudio.onplay = function () {
        skalBars.className = "";
        localStorage.setItem("played", "skal-audio");
      };
      skalAudio.onpause = function () {
        skalBars.className = "d-none";
      };
      ragnarokAudio.onplay = function () {
        ragnarokBars.className = "";
        localStorage.setItem("played", "ragnarok-audio");
      };
      ragnarokAudio.onpause = function () {
        ragnarokBars.className = "d-none";
      };
      careAudio.onplay = function () {
        careBars.className = "";
        localStorage.setItem("played", "care-audio");
      };
      careAudio.onpause = function () {
        careBars.className = "d-none";
      };
      smoothAudio.onplay = function () {
        smoothBars.className = "";
        localStorage.setItem("played", "smooth-audio");
      };
      smoothAudio.onpause = function () {
        smoothBars.className = "d-none";
      };
      slimAudio.onplay = function () {
        slimBars.className = "";
        localStorage.setItem("played", "slim-audio");
      };
      slimAudio.onpause = function () {
        slimBars.className = "d-none";
      };
      withoutAudio.onplay = function () {
        withoutBars.className = "";
        localStorage.setItem("played", "without-audio");
      };
      withoutAudio.onpause = function () {
        withoutBars.className = "d-none";
      };
      godAudio.onplay = function () {
        godBars.className = "";
        localStorage.setItem("played", "god-audio");
      };
      godAudio.onpause = function () {
        godBars.className = "d-none";
      };
      loseAudio.onplay = function () {
        loseBars.className = "";
        localStorage.setItem("played", "lose-audio");
      };
      loseAudio.onpause = function () {
        loseBars.className = "d-none";
      };
      beatItAudio.onplay = function () {
        beatItBars.className = "";
        localStorage.setItem("played", "beat-it-audio");
      };
      beatItAudio.onpause = function () {
        beatItBars.className = "d-none";
      };
      mozartAudio.onplay = function () {
        mozartBars.className = "";
        localStorage.setItem("played", "mozart-audio");
      };
      mozartAudio.onpause = function () {
        mozartBars.className = "d-none";
      };
      tonyAudio.onplay = function () {
        tonyBars.className = "";
        localStorage.setItem("played", "tony-audio");
      };
      tonyAudio.onpause = function () {
        tonyBars.className = "d-none";
      };
      peytonAudio.onplay = function () {
        peytonBars.className = "";
        localStorage.setItem("played", "peyton-audio");
      };
      peytonAudio.onpause = function () {
        peytonBars.className = "d-none";
      };
      billieAudio.onplay = function () {
        billieBars.className = "";
        localStorage.setItem("played", "billie-audio");
      };
      billieAudio.onpause = function () {
        billieBars.className = "d-none";
      };

      document.onkeydown = function (event) {
        event.preventDefault();
        if (event.key === " ") {
          let audio = document.getElementById(localStorage.getItem("played"));
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }
      };