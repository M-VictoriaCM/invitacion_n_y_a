<script>
export default {
    name:'IconMusicActive'
}
</script>
<template>
    <div>
        <div class="box">
        <div class="music one"></div>
        <div class="music two"></div>
        <div class="music three"></div>
        <div class="music four"></div>
        <div class="music five"></div>
        
      </div>
      <div class="note"></div>
    </div>
</template>

<style scoped>
  .box {
    position: relative;
    width: 50px;
    height: 50px;
    margin: auto;
    margin-top: 13%;
    border-radius: 50%;
    background: #8A8484;
    transform: rotate(180deg);
  }
  .music,
  .note,
  .note:before,
  .note:after{
    position: absolute;
  }

  .music {
    width: 10%;
    height: 30%;
    background: white;
    border-radius: 50px;
  }

  .one {
    left: 15%;
    top: 30%;
    animation: music 1s ease infinite alternate;
  }

  .two {
    left: 30%;
    top: 30%;
    animation: music 1.3s ease infinite alternate;
  }

  .three {
    left: 45%;
    top: 30%;
    animation: music 1.6s ease infinite alternate;
  }

  .four {
    left: 60%;
    top: 30%;
    animation: music 1.9s ease infinite alternate;
  }

  .five {
    left: 75%;
    top: 30%;
    animation: music 2.2s ease infinite alternate;
  }

  @keyframes music {
    0% {
      height: 10%;
    }
    100% {
      height: 40%;
    }
  }

  .note {
    width: 0;
    top: 100px;
    left: 90px;
    right: 0;
    margin: auto;
    color:#000000A8;
  }
  
  .note:before {
    content: "♫";
    opacity: 0;
    left: -50px;
    font-size: 40px;
    animation: musicNote 3.5s infinite ease;
  }
  
  .note:after {
    content: "♪";
    opacity: 0;
    left: -50px;
    font-size: 40px;
    animation: musicNote 3.3s infinite ease;
  }
  
  @keyframes musicNote {
    0% {
      opacity: 0;
      transform: translate(0px, 50px);
    }
    30% {
      transform: rotate(12deg) translate(-30px, 0px);
    }
    45% {
      opacity: 1;
    }
    60% {
      transform: rotate(-12deg) translate(30px, -100px);
    }
    100% {
      opacity: 0;
      transform: rotate(0deg) translate(0px, -200px);
    }
  }
</style>