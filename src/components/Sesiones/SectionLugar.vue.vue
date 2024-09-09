<script>
import IconCeremonia from '../icon/IconCeremonia.vue';
import Boton from '../Boton.vue';
import PopupLocalizacion from '../popups/PopupLocalizacion.vue';
export default{
    name:'SectionLugar',
    data(){
        return{
            title:'Ceremonia',
            detalle:'Los esperamos el sábado 16 de Noviembre en la Parroquia Nuestra Señora de Luján Comenzamos 20:00 hs.',
            popup: false
        }
    },
    components:{
        Boton,
        PopupLocalizacion,
        IconCeremonia 
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        }        
    }
}
</script>
<template>
    <div id="lugar" class="asistencia__conteiner container">
        <div class="asistencia_content">
            <IconCeremonia/>
            <h1 class="title_section_lugar">{{ title }}</h1>
        </div>
        <div class="asistencia_description">
            <p class="detalle_lugar">{{ detalle }}</p>
        </div>
        <div class="container__button">
            <PopupLocalizacion v-show="popup" @close="togglePopUp()"/>
            <Boton label="¿COMO LLEGAR?" customClass="btn-mayor" @click="togglePopUp()"/>
        </div>
        
    </div>
</template>
<style>
.asistencia__conteiner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    margin-bottom: 2rem;
}
.asistencia_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title_section_lugar{
    font-family: var(--font_family_principal);
    color:var(--color__font_primary);
    font-size: var(--font-size-36);
    font-weight: 600;
    font-style: italic;
    margin-bottom: 1rem;
}
.detalle_lugar{
    font-family: var(--font_family_principal);
    color:var(--color__font_sencondary);
    font-size: var(--font-size-16);
    text-align: center;
    font-weight:400;
    font-style: italic;
    line-height: 100%;
}
.detalle2_lugar{
    font-family: var(--family__font_secondary);
    color:var(--color__font_primary);
    font-size: var(--font-size-12);
    text-align: center;
    font-weight: 200;
}
.asistencia_description{
    width:80%;
    height:100%;
}
@media (min-width: 768px) and (max-width: 991px) {
    .title_section_lugar{
        font-size: var(--font-size-42);
    }
    .detalle_lugar{
        font-size: var(--font-size-24);
    }
    .detalle2_lugar{
        font-size: var(--font-size-18);
    }

}
@media (min-width: 1025px) {
    .title_section_lugar{
        font-size: var(--font-size-64);
    }
    .detalle_lugar{
        font-size: var(--font-size-28);
    }
    .detalle2_lugar{
        font-size: var(--font-size-24);
    }
}
</style>