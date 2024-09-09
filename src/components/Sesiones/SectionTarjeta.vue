<script>
import IconTarjeta from '../icon/IconTarjeta.vue';
export default{
    name:'SectionTarjeta',
    data(){
        return{
            title:'Tarjeta',
            text1:'Tu presencia es el mejor regalo que podríamos recibir.',
            text2:'Te invitamos a acompañarnos y, para hacerlo, te pedimos que abones tu tarjeta de $40,000.',
            text3:'Esta colaboración nos ayudará a cumplir nuestro sueño.'            
        }
    },
    components:{
        IconTarjeta
    }
}
</script>
<template>
    <div id="tarjeta" class="tarjeta__conteiner container">
        <div class="asistencia_content">
            <IconTarjeta/>
            <h1 class="title_section_tarjeta">{{ title }}</h1>
        </div>
        <div class="asistencia_description">
            <p class="detalle_tarjeta">{{ text1 }}</p>
            <p class="detalle_tarjeta">{{ text2 }}</p>
            <p class="detalle_tarjeta">{{ text3 }}</p>
            <p class="detalle_tarjeta"><strong>El pago puede realizarse en dos cuotas:</strong></p>
            <p class="detalle_tarjeta"><strong>Primer pago:</strong> hasta el 30.09</p>
            <p class="detalle_tarjeta"><strong>Segundo pago:</strong>hasta el 31.10</p>
        </div>
    </div>
</template>
<style>
.tarjeta__conteiner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    margin-top:3.5rem;
    margin-bottom: 1rem;
}
.asistencia_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title_section_tarjeta{
    font-family: var(--font_family_principal);
    color:var(--color__font_primary);
    font-size: var(--font-size-36);
    font-weight: 600;
    font-style: italic;
    margin-bottom: 1rem;
}
.detalle_tarjeta{
    font-family: var(--font_family_principal);
    color:var(--color__font_sencondary);
    font-size: var(--font-size-16);
    text-align: center;
    font-weight:400;
    font-style: italic;
    text-align: center;
    margin:0;
}
.asistencia_description{
    width:80%;
    height:100%;
}
@media (min-width: 768px) and (max-width: 991px) {
    .title_section_asistencia{
        font-size: var(--font-size-42);
    }
    .detalle_tarjeta{
        font-size: var(--font-size-24);
    }

}
@media (min-width: 1025px) {
    .title_section_asistencia{
        font-size: var(--font-size-64);
    }
    .detalle_tarjeta{
        font-size: var(--font-size-28);
    }
}
</style>