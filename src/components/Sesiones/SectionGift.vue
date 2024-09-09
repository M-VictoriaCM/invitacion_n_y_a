<script>
import Boton from '../Boton.vue';
import IconGift from '../icon/IconGift.vue';
import PopupBancario from '../popups/PopupBancario.vue';
export default{
    name:'SectionGift',
    data(){
        return{
            title:'Regalo',
            detalle:'Si deseas regalarnos algo más que tu hermosa presencia...',
            popup:false
        }
    },
    components:{
        IconGift,
        Boton,
        PopupBancario
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        }        
    }
}
</script>
<template>
    <div id="regalo" class="asistencia__conteiner container">
        <div class="asistencia_content">
            <IconGift/>
            <h1 class="title_section_gift">{{ title }}</h1>
        </div>
        <div class="asistencia_description">
            <p class="detalle_gift">{{ detalle }}</p>
        </div>
        <div class="container__button">
            <PopupBancario v-show="popup" @close="togglePopUp()"/>
            <Boton label="DATOS BANCARIOS" customClass="btn-mayor" @click="togglePopUp()"/>
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
.title_section_gift{
    font-family: var(--font_family_principal);
    color:var(--color__font_primary);
    font-size: var(--font-size-36);
    font-weight: 600;
    font-style: italic;
    margin-bottom: 1rem;
}
.detalle_gift{
    font-family:  var(--font_family_principal);
    color:var(--color__font_sencondary);
    font-size: var(--font-size-16);
    text-align: center;
    font-weight:400;
    font-style: italic;
    text-align: center;
}
.asistencia_description{
    width:80%;
    height:100%;
}
@media (min-width: 768px) and (max-width: 991px) {
    .title_section_gift{
        font-size: var(--font-size-42);
    }-color__font_primary
    .detalle_gift{
        font-size: var(--font-size-24);
    }
}
@media (min-width: 1025px) {
    .title_section_gift{
        font-size: var(--font-size-64);
    }
    .detalle_gift{
        font-size: var(--font-size-28);
    }
}
</style>