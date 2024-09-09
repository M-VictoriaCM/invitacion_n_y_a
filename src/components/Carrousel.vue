<script>
import foto1 from '@/assets/img/foto002.png';
import foto2  from '@/assets/img/foto003.png';
import foto3 from '@/assets/img/foto004.png';
import foto4 from '@/assets/img/foto005.png';
import foto5 from '@/assets/img/foto006.png';
import foto6 from '@/assets/img/foto007.png';
import foto7 from '@/assets/img/foto008.png';


export default {
  name: 'Carrousel',
  data() {
    return {
      foto1,
      foto2,
      foto3,
      foto4,
      foto5,
      foto6,
      foto7
    }
  }
}
</script>
<template>
  
  <div class="container_carrousel">
    <div id="carouselExampleFade" class="carousel slide carousel-fade carousel_photo" data-bs-ride="carousel" data-bs-interval="2500">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="foto1" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto2" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto3" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto4" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto5" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto6" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img :src="foto7" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  </div>
</template>
<style>
.container_carrousel{
  width:100%;
  height:100%;
}
.carousel_photo{
  min-width: 100vw;
}

</style>