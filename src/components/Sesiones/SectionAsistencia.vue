<script>
import PopupAsistencia from '../popups/PopupAsistencia.vue';
import PopupLocalizacionFiesta from '../popups/PopupLocalizacionFiesta.vue';
import IconFiesta from '../icon/IconFiesta.vue';
import Boton from '../Boton.vue';
export default{
    name:'SectionAsistencia',
    data(){
        return{
            title:'Fiesta',
            text:'Los esperamos en el Salón del Club. A. Agrario a las 21:30 hs.',
            popup:false,
            popup_:false,
            showPopupAsistencia:false,
            showPopLocalizacion:false            
        }
    },
    components:{
        IconFiesta ,
        Boton,
        PopupAsistencia,
        PopupLocalizacionFiesta
    },
    methods: {
        togglePopUp(popupType){
            if(popupType === 'asistencia'){
                this.showPopupAsistencia = !this.showPopupAsistencia;
            }else if(popupType === 'localizacion'){
                this.showPopLocalizacion =!this.showPopLocalizacion;
            }

        }        
    }
}
</script>
<template>
    <div id="asistencia" class="asistencia__conteiner container">
        <div class="asistencia_content">
            <IconFiesta />
            <h1 class="title_section_asistencia">{{ title }}</h1>
        </div>
        <div class="asistencia_description">
            <p class="detalle_asistencia">{{ text }}</p>
        </div>
        <div class="container__button">
            <PopupAsistencia v-show="showPopupAsistencia" @close="togglePopUp('asistencia')"/>
            <Boton label="CONFIRMAR ASISTENCIA" customClass="btn-mayor" @click="togglePopUp('asistencia')"/>
        </div>
        <div class="container__button2">
            <PopupLocalizacionFiesta v-show="showPopLocalizacion" @close="togglePopUp('localizacion')"/>
            <Boton label="¿COMO LLEGAR?" customClass="btn-mayor" @click="togglePopUp('localizacion')"/>
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
.title_section_asistencia{
    font-family: var(--font_family_principal);
    color:var(--color__font_primary);
    font-size: var(--font-size-36);
    font-weight: 600;
    font-style: italic;
    margin-bottom: 1rem;
}
.detalle_asistencia{
    font-family: var(--font_family_principal);
    color:var(--color__font_sencondary);
    text-align: center;
    font-size: var(--font-size-16);
    font-weight:400;
    font-style: italic;
    line-height: 100%;
}
.asistencia_description{
    width:80%;
    height:100%;
}
.container__button{
    margin-bottom: 1rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .title_section_asistencia{
        font-size: var(--font-size-42);
    }
    .detalle_asistencia{
        font-size: var(--font-size-24);
    }
    .detalle_asistencia3{
    font-size: var(--font-size-18);
    }

}
@media (min-width: 1025px) {
    .title_section_asistencia{
        font-size: var(--font-size-64);
    }
    .detalle_asistencia{
        font-size: var(--font-size-28);
    }
    .detalle_asistencia3{
        font-size: var(--font-size-28);
    }
}
</style>