<script>
import Swal from 'sweetalert2';
import IconInstagram from '../icon/IconInstagram.vue';
import Boton from '../Boton.vue';
export default {
    name:'SectionRedes',
    data() {
        return {
            title: 'Los momentos mágicos merecen ser compartidos con personas especiales.',
            subtitle: 'Compartí tus fotos y videos de ese hermoso día, usando el hashtag',
            hastag: '#nachoyandre',

        }
    },
    components:{
        IconInstagram,
        Boton
    },
    methods:{
        copyToClipboard(text){
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
           Swal.fire({
            title:'OK!',
            icon: 'success',
            text:'¡El texto ha sido copiado!',
            confirmButtonText:'OK'
           });
        }
        
    }
}
</script>
<template>
    <div class="asistencia__conteiner container">
        
        <div class="asistencia_content">
            <h5 class="title_section_insta">{{ title }}</h5>
        </div>
        <div class="asistencia_description">
            <p class="detalle_insta">{{ subtitle }}</p>
            <div class="conteiner__icon_instagram">
                <IconInstagram/>
            </div>
            <p class="detalle2_insta">{{ hastag }}</p>
        </div>
        <Boton label="COPIAR #" customClass="btn-mayor" @click="copyToClipboard(hastag)"/>
    </div>
</template>
<style>
.conteiner__icon_instagram{
    display: flex;
    justify-content: center;

}
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
.title_section_insta{
    font-family: var(--font_family_principal);
    color:var(--family__font_primary);
    font-size: var(--font-size-24);
    text-align: center;
    font-weight: 600;
    font-style: italic;
    margin-bottom: 1rem;
}
.detalle_insta{
    font-family:  var(--font_family_principal);
    color:var(--color__font_sencondary);
    font-size: var(--font-size-16);
    text-align: center;
    font-weight: 300;
    font-style: italic;
}
.detalle2_insta{
    font-family:  --font_family_principal;
    color:var(--color__font_primary);
    font-size: var(--font-size-16);
    text-align: center;
    font-style:italic;
    font-weight: 200;
}
.asistencia_description{
    width:80%;
    height:100%;
}
@media (min-width: 768px) and (max-width: 991px) {
    .title_section_insta{
        font-size: var(--font-size-42);
    }
    .detalle_insta{
        font-size: var(--font-size-24);
    }
    .detalle2_insta{
        font-size: var(--font-size-18);
    }

}
@media (min-width: 1025px) {
    .title_section_insta{
        font-size: var(--font-size-64);
    }
    .detalle2_insta{
        font-size: var(--font-size-28);
    }
    .detalle_insta{
        font-size: var(--font-size-28);
    }
}
</style>