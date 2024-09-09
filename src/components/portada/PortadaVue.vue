<script>
import { inject } from 'vue';
import Boton from '../Boton.vue';

export default {
    name: 'Portada',
    components: {
        Boton
    },
    data() {
        return {
            title1: 'Juan Ignacio',
            title2: '...   &   ...',
            title3: 'Andrea',
            subtitle:'¡Unite a nuestra boda!'
            
        }
    },
    setup() {
    const audioController = inject('audioController');
    return { audioController };
  },
    methods: {
    enterWithMusic() {
      this.audioController.play();
      this.$router.push({ name: 'Invitation' });
    },
    enterWithoutMusic() {
      this.audioController.stop();
      this.$router.push({ name: 'Invitation' });
    }
  }  
}
</script>
<template>
    <div class="portada_container container">
        <div class="portada_content container">
            <span class="conteiner__title">
                <p class="subtitle_portada">{{ subtitle }}</p>
                <h1 class="title__portada">{{ title1 }}</h1>
                <h1 class="title__portada">{{ title2 }}</h1>
                <h1 class="title__portada">{{ title3 }}</h1>
            </span>
        </div>
        <div class="portada_content_buttom">
            <Boton label="INGRESAR CON MUSICA" customClass="btn-mayor btn_ingreso" @click="enterWithMusic"/>
            
            <Boton label="INGRESAR SIN MUSICA" customClass="btn-mayor" @click="enterWithoutMusic"/>

        </div>
    </div>
</template>
<style>
.portada_container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.portada_content{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}


.conteiner__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--color__background);
    padding: 1rem 0;

}

.title__portada {
    font-family:Playfair Display;
    color: var(--color__font_primary);
    font-size: var(--font-size-42);
    line-height: 140%;
    text-align: center;
    font-weight: 600;
    font-style: italic;
}
.subtitle_portada{
    font-family: Playfair Display;
    color: var(--color_font_btn);
    font-size: var(--font-size-6);
    line-height: 20px;
    text-align: center;
    font-weight: 600;
}
.portada__conteiner_button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.portada_content_buttom{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:2rem;
}
.btn_ingreso{
    margin-bottom: 1rem;
}
@media screen and (max-width:320px) {
    .title__portada{
        font-size: var(--font-size-32);
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .title__portada {
        font-size: var(--font-size-32);
    }
    
}
@media (min-width: 1025px) {
    .conteiner__heart{
        width:400px;
        height:auto;
    }
}
</style>