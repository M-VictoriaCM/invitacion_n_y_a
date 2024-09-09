<script>
export default{
  name:'App',
  data(){
    return{
      audio: null,
      isPlaying: false,
      musicActive:false,
    }
  },
  methods:{
    async handleMusicPlay() {
      if (!this.audio) {
        this.audio = new Audio((await import('./assets/music/BenjamínAmadeo_Para_Siempre.mp3')).default);
      }
      this.audio.play();
      this.isPlaying = true;
      this.musicActive=true;
    },
    handleMusicPause() {
      if (this.audio) {
        this.audio.pause();
        this.isPlaying = false;
      }
    },
    handleMusicToggle() {
      if (this.audio) {
        if (this.isPlaying) {
          this.handleMusicPause();
        } else {
          this.handleMusicPlay();
        }
      }
    },
    handleMusicStop(){
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.musicActive = false;
      }
    },
    handleVisibilityChange() {
      if (document.hidden && this.isPlaying) {
        this.handleMusicPause();
      }
    }
  },
  provide() {
    return {
      audioController: {
        play: this.handleMusicPlay,
        pause: this.handleMusicPause,
        toggle: this.handleMusicToggle,
        stop: this.handleMusicStop,
        isPlaying: () => this.isPlaying,
        isMusicActive: () => this.musicActive
      }
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.musicActive) {
      this.handleMusicStop();
    }
    next();
  },
  mounted() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }
}
</script>
<template>
  <div id="app-container">
    <RouterView />
    </div>
</template>

<style scoped>
#app-container{
  overflow: hidden;
}

</style>
