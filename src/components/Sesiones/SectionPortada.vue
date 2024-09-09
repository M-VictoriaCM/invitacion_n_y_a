<script>
import Cartel from '../icon/Cartel.vue';
import foto01 from '@/assets/img/foto_01.png'

export default {
    name: 'SectionPortada',
    components: {
        Cartel,
        
    },
    data() {
        return {
            foto01,
            title: 'Florencia & Andrés',
            subtitle: '¡NOS CASAMOS!'
        }
    }
}
</script>
<template>
    <div>
        <div class="section_portada_container">
            <div class="section_portada_img">
                <img :src="foto01"  class="img_portada" alt="foto">
                <div class="overlay"></div>
            </div>
            <div class="section_portada_title">
            </div>
            <Cartel class="cartel"/>
        </div>

    </div>
</template>
<style>
.section_portada_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
}

.section_portada_img {
    position: relative;
    min-width:100%;
    height:100%;
}


.img_portada{
    display: block;
    width: 100vw;
    height: auto;
    object-fit: cover;
    position:relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); 
}
.section_portada_title {
    position: absolute;
}

.title__section,
.subtitle__section {
    color: var(--font-light);
    line-height: 100%;
    text-align: center;
}

.title__section {
    font-family: var(--family__font_primary);
    font-size: var(--font-size-32);
}

.subtitle__section {
    font-family: var(--family__font_secondary);
    font-weight: 400;
    font-size: var(--font-size-18);
}

.cartel {
    position: absolute;
    transform: translateX(100%);
    transform: translateY(100%);
   
}



@media (min-width: 768px) and (max-width: 991px) {
    .section_portada_container{
        min-width:100vw;
        border:1px solid magenta;
    }
    .section_portada_img{
        width:100%;
    }
    .title__section {
    font-size:var(--font-size-64);
    }

    .subtitle__section {
        font-size: var(--font-size-42);
        font-weight: 100;
    }
    .cartel {
        transform: translateX(100%);
        transform: translateY(145%);
    }
}
@media (min-width: 1025px) {
    
    .section_portada_container{
        width:100vw;
        height:100%;
    }
    .section_portada_img{
        width:100%;
    }
    .title__section {
    font-size:var(--font-size-76);
    }

    .subtitle__section {
        font-size: var(--font-size-36);
        font-weight: 100;
    }
    .cartel {
        transform: translateX(100%);
        transform: translateY(155%);
    }
}
</style>