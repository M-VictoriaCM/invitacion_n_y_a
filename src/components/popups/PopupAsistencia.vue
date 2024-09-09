<script>
import Boton from '../Boton.vue';
import PopupBase from './PopupBase.vue';
import IconParty from '../icon/IconParty.vue';
import Swal from 'sweetalert2';

export default {
    name: 'PopupAsistencia',
    components: {
        PopupBase,
        IconParty,
        Boton
    },
    data() {
        return {
            title: '¿Asistiré a la fiesta?',
            options1: 'Sí, asistiré',
            options2: 'No podré asistir',
            inputName: 'Nombre completo:',
            inputTxtArea: 'Información adicional (opcional):',
            isAttending: '',
            nombre: '',
            informacionAdicional: '',
            errorMessage: ''
        }
    },
    methods: {
        enviarAWhatsApp() {
            if (!this.nombre || !this.isAttending) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Por favor, complete todos los campos requeridos',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }

            const mensaje = `Nombre: ${this.nombre}\nAsistiré: ${this.isAttending === 'yes' ? 'Sí' : 'No'}\nInformación adicional: ${this.informacionAdicional}`;
            const telefono = "2983559655";
            const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

            Swal.fire({
                title: 'Info!',
                text: 'Será redirigido a WhatsApp para confirmar el envío del mensaje.',
                icon: 'info',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(enlaceWhatsApp, '_blank');
                }
            });
        }
    }
}
</script>

<template>
    <popup-base :title="title" >
        <template #icon>
            <div class="circle">
                <icon-party class="icon__circle"></icon-party>
            </div>
        </template>
        <div class="modal-body">
            <div class="-flex flex-column">
                <div class="form-group mb-3">
                    <div class="content__radio">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="attendingYes" name="attendance"
                                v-model="isAttending" value="yes" />
                            <label class="form-check-label" for="attendingYes">{{ options1 }}</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="attendingNo" name="attendance"
                                v-model="isAttending" value="no" />
                            <label class="form-check-label" for="attendingNo">{{ options2 }}</label>
                        </div>
                    </div>
                    <span class="text-danger" v-if="errorMessage">{{ errorMessage }}</span>
                </div>
                <div class="form-group mb-3">
                    <label for="nombre" class="form-label">{{ inputName }}</label>
                    <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Ej: Juan Pérez" />
                </div>
                <div class="form-group mb-3">
                    <label for="informacionAdicional" class="form-label">{{ inputTxtArea }}</label>
                    <textarea class="form-control" id="informacionAdicional" v-model="informacionAdicional" rows="3"
                        placeholder="Ej: Vegetariano, alergico, etc."></textarea>
                </div>
            </div>
        </div>
        <template #footer>
            <Boton label="ENVIAR" customClass="btn-mayor" @click="enviarAWhatsApp"/>
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