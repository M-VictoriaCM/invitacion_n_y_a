<script>
import IconMusic from '../icon/IconMusic.vue';
import Boton from '../Boton.vue';
import Swal from 'sweetalert2';
export default {
    name: 'SectionMusic',
    data() {
        return {
            title: 'Música',
            detalle: 'Si deseas regalarnos algo más que tu hermosa presencia...',
            popup:false
        }
    },
    components: {
        Boton,
        IconMusic
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        },
        redirectToSheet() {
        Swal.fire({
            title: 'Info!',
            text: 'Será redirigido a YouTube. Para continuar presione OK, o Cancelar para cerrar.',
            icon: 'info',
            showCancelButton: true, // Habilita el botón "Cancelar"
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancelar', // Texto del botón "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario presiona "OK"
                window.open("https://music.youtube.com/playlist?list=PLGkl6CwAcV6NIeC_JU0mpd4w2uo11flxq&jct=QWl4kyacPqoSRROUV8VFoA", "_blank");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Si el usuario presiona "Cancelar", cierra el popup de SweetAlert
                this.togglePopUp();
            }
        });
    }    
    }
    
        
}
</script>
<template>
    <div id="musica" class="asistencia__conteiner_music container">

        <div class="content__music">
            <div class="asistencia_content">
                <IconMusic />
                <h1 class="title_section_music">{{ title }}</h1>
            </div>
            <div class="asistencia_description">
                <p class="detalle_music">¿Cuál es la canción que no debe faltar en la <strong>PlayList</strong> de la fiesta?
                </p>
            </div>
                <Boton label="SUGERIR CANCIÓN" customClass="btn-mayor" @click="redirectToSheet()"/>
        </div>

    </div>
</template>
<style>
.asistencia__conteiner_music {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    margin-bottom: 2rem;
}

.puntilla {
    position: relative;
    height:100%;
    width:100%;
}

.content__music {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:absolute;
}

.asistencia_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.puntilla {
    position: relative;
}

.title_section_music{
    font-family: var(--font_family_principal);
    color: var(--color__font_primary);
    font-size: var(--font-size-36);
    font-weight: 600;
    font-style: italic;
    margin-bottom: 1rem;
}

.detalle_music {
    font-family: var(--font_family_principal);
    color: var(--color__font_sencondary);
    font-size: var(--font-size-16);
    text-align: center;
    font-weight:400;
    font-style: italic;
    text-align: center;
}

.asistencia_description {
    width: 80%;
    height: 100%;
}
@media (min-width: 768px) and (max-width: 991px) {
    .title_section_music{
        font-size: var(--font-size-42);
    }
    .detalle_music{
        font-size: var(--font-size-24);
    }
}
@media (min-width: 1025px) {
    .asistencia__conteiner_music{
        width:100%;
        height:450px;
    }
    .title_section_music{
        font-size: var(--font-size-64);
    }
    .detalle_music{
        font-size: var(--font-size-28);
    }
}
</style>