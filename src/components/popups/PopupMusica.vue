<script>
import Boton from '../Boton.vue';
import PopupBase from '../popups/PopupBase.vue';
import IconMusic from '../icon/IconMusic.vue';
import Swal from 'sweetalert2';

export default {
    name: 'PopupMusica',
    components: {
        PopupBase,
        IconMusic,
        Boton
    },
    data() {
        return {
            title: 'Música',
            inputTxtArea: '¡Para que la fiesta sea completa ayudame eligiendo aquellas canciones que no pueden faltar!',
            popup: false,
            errorMessage: ''
        }
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        },
        redirectToSheet() {
            window.open("https://docs.google.com/spreadsheets/d/14ZqiU3aUkCa3sFiHhx7QuyGkOamEDwLxTVRHkViNydE/edit?usp=sharing", "_blank");
        }
        

    }
}
</script>

<template>
    <popup-base :title="title" >
        <template #icon>
            <div class="circle">
                <IconMusic class="icon__circle"/>
            </div>
        </template>
        <div class="modal-body">
            <div class="-flex flex-column">
                <div class="form-group mb-3">
                    <label for="informacionAdicional" class="form-label">{{ inputTxtArea }}</label>
                </div>
            </div>
        </div>
        <template #footer>
            <Boton label="ENVIAR Su" customClass="btn-mayor" @click="redirectToSheet()"/>
        </template>
    </popup-base>
</template>

<style scoped>

.form-group{
    font-family: Montserrat;
    color: var(--color__font_primary);
}
input,
textarea {
    border:1px solid rgb(0, 0, 0, 0.3);
}


::placeholder {
    color: #a5a5a5;
}

.btn-close:hover,
.btn-close:focus {
    outline: none;
    box-shadow: none;
    border-radius: 50%;
}

.btn-close::before {
    color:black;
}
@media (min-width: 1025px) {
    
}


</style>