<script>
import PopupBase from './PopupBase.vue';
import Swal from 'sweetalert2';
import IconGift from '../icon/IconGift.vue';
import Boton from '../Boton.vue';

export default {
    name: 'CardBancario',
    components: {
        PopupBase,
        IconGift,
        Boton
    },
    data() {
        return {
            title: 'Regalos',
            name: 'Andrea Gisele Maldonado',
            cvu: '0000003100041451523496',
            alias: '123boda',
            cuit:'27300259710',
            cuenta:'Mercado de Pago'
        }
    },
    methods: {
        copyToClipboard(text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            Swal.fire({
                title: 'OK!',
                icon: 'success',
                text: '¡El texto ha sido copiado!',
                confirmButtonText: 'OK'
            });
        }

    }
}
</script>

<template>
    <popup-base :title="title" >
        <template #icon>
            <div class="circle">
                <icon-gift class="icon__circle"/>
            </div>
        </template>
        <div class="modal-body">
            <span class="block__text">
                <h3 class="title__section">TITULAR:</h3>
                <p class="text__section">{{ name }}</p>
            </span>
            <span class="block__text">
                <h3 class="title__section">CVU:</h3>
                <p class="text__section">{{ cvu }}</p>
            </span>
            <span class="block__text">
                <h3 class="title__section">ALIAS:</h3>
                <p class="text__section">{{ alias }}</p>
            </span>
            <span class="block__text">
                <h3 class="title__section">CUIT/CUIL:</h3>
                <p class="text__section">{{ cuit }}</p>
            </span>
            <span class="block__text">
                <h3 class="title__section">CUENTA:</h3>
                <p class="text__section">{{ cuenta }}</p>
            </span>
        </div>
        <div class="pop-up-footer">
            <Boton label="COPIAR CBU" class="btn_" customClass="btn-mayor" @click="copyToClipboard(cvu)"/>
            <Boton label="COPIAR ALIAS" customClass="btn-mayor" @click="copyToClipboard(alias)"/>
        </div>
    </popup-base>
</template>

<style scoped>
.circle {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background:var(--color__circle);
    border: 1px solid var(--color__principal_dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
}

.icon__circle {
    width: 100%;
    display: flex;
    justify-content: center;
}

.block__text {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.title__section {
    font-family: Montserrat;
    color: var(--color__font_primary);
    font-size: 1rem;
}

.text__section {
    font-family: Montserrat;
    color: var(--color__font_primary);
    font-size: 14px;
    margin-top: .6rem;
    margin-left: .5rem;
    line-height: 100%;
}
.btn_{
    margin-bottom: 1rem;
}
@media(max-width:320px) {
    .pop-up {
        padding: 3px 16px 200px;
    }
    .pop-up-body{
        height:100%;
    }
}

@media(max-width:360px) {
    .pop-up-inner {
        width: 100%;
        height: 530px;
    }

    .circle {
        width: 45px;
        height: 45px;
    }

    .pop-up-body {
        height: 90%;
    }

    .title {
        margin: 0;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .pop-up-inner {
        width: 70%;
    }
}

@media (min-width: 1025px) {
    .pop-up-inner {
        width: 100%;
        height:400px;
        display:flex;
    }

    .pop-up-body {
        width: 100%;
        display:flex;
        justify-content: center;
    }
    .circle {
        width: 150px;
        height: 150px;
    }

    .pop-up-footer {
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btn-primary {
        width: 70%;
    }
}
</style>