<script>
export default {
    name:'IconMusicInactive'
}
</script>
<template>
    <div class="box">
        <div class="music one"></div>
        <div class="music two"></div>
        <div class="music three"></div>
        <div class="music four"></div>
        <div class="music five"></div>
        
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
    background:#8A8484;
    transform: rotate(180deg);
  }

  .music {
    position: absolute;
    width: 10%;
    height: 30%;
    background: white;
    border-radius: 50px;
  }

  .one {
    left: 15%;
    top: 30%;
  }

  .two {
    left: 30%;
    top: 30%;
  }

  .three {
    left: 45%;
    top: 30%;
  }

  .four {
    left: 60%;
    top: 30%;
  }

  .five {
    left: 75%;
    top: 30%;
  }
  
</style>