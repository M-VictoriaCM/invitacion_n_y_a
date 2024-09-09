<script>
import Card from '../Card.vue';
import IconHospedaje from './icon/IconHospedaje.vue';

export default {
    name: 'SectionHospedaje',
    data() {
        return {
            title: 'Hospedajes'
        }
    },
    components: {
        IconHospedaje,
        Card
    }
}
</script>
<template>
    <div id="hospedaje" class="asistencia__conteiner container">
        <div class="asistencia_content">
            <IconHospedaje />
            <h1 class="title_section_hospedaje">{{ title }}</h1>
        </div>

        <div id="carouselExample" class="carousel slide"  >
            <div class="carousel-inner carrousel">
                <div class="carousel-item active">
                    <div class="cards-wrapper">
                        <Card nombre="Hotel Andrea" class="card" mapUrl="https://maps.app.goo.gl/SoHHGLRaArKjaJYh6"
                        embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.3548565716574!2d-60.2706302!3d-38.377211599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95926dba9de4ae37%3A0x66c6e0b986330da9!2sHOTEL%20ANDREA!5e1!3m2!1ses-419!2sar!4v1725157260365!5m2!1ses-419!2sar" />

                        <Card nombre="Elegance Hotel" class="card" mapUrl="https://maps.app.goo.gl/BMphNoRxL65BXfZK9"
                                embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10622.537285809376!2d-60.31593754458007!3d-38.369596599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95926c2eea169fe1%3A0x6f4d9f8aed94d371!2sElegance%20Hotel%20Tres%20Arroyos!5e1!3m2!1ses-419!2sar!4v1725159492003!5m2!1ses-419!2sar" />

                        <Card nombre="Los Silos Hotel" class="card" mapUrl="https://maps.app.goo.gl/oyE198SaXRaxpxha6"
                        embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42488.83871794631!2d-60.32859572750156!3d-38.371828427981185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95926c335b33d40f%3A0x25c7d1303984e8fe!2sLos%20Silos%20Hotel!5e1!3m2!1ses-419!2sar!4v1725159641703!5m2!1ses-419!2sar" />
                        
                        <Card nombre="Hoteles temporarios" class="card" mapUrl="https://maps.app.goo.gl/zDFJ6jW7QY6rpZPQ7"
                                embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42492.0090220682!2d-60.32615387581784!3d-38.36642879127258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95926dac16830a99%3A0x580d8b216f434c9e!2sTres%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1725161667692!5m2!1ses-419!2sar" />
                                               
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


    </div>
</template>
<style>
@media screen and (min-width:578px) {
    .cards-wrapper {
        display: flex;
    }

    .card {
        width: calc(100% / 4);
        margin: 0 .1em;
        height:100%;
    }

    .image-wrapper {
        height: 22vw;
        margin: 0 auto;
    }
}

@media screen and (max-width:576px) {
    .carousel{
        width:100%;
    }
    .cards-wrapper {
        display: flex;
        flex-direction: row;
        overflow-x: auto; 
        gap: 0.5em; 
    }

    .card {
        width: 50%; 
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto; 
        height:280px;
        margin-bottom: 1rem;
    }

    .image-wrapper {
        width:100%;
        height: 100px; 
    }
}

.image-wrapper img {
    width: 100%;
    height: 100%;
}
.asistencia__conteiner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
}

.asistencia_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title_section_hospedaje {
    font-family: var(--family__font_primary);
    color: var(--color__font_sencondary);
    font-size: var(--font-size-32);
    font-weight: 400;
    margin-bottom: 1rem;
}

.detalle {
    font-family: var(--family__font_secondary);
    color: var(--color__font_primary);
    font-size: var(--font-size-18);
    text-align: center;
    font-weight: 200;
}

.asistencia_description {
    width: 80%;
    height: 100%;
}
@media (min-width:428px) {
    .card {
        width: 100%;
    }
}


@media (min-width: 768px) and (max-width: 991px) {
    .title_section_hospedaje {
        font-size: var(--font-size-42);
    }
}

@media (min-width: 1025px) {
    .title_section_hospedaje {
        font-size: var(--font-size-64);
    }

}
</style>