<script>
import IconCartel from './IconCartel.vue';
export default{
    name:'Cartel',
    components:{
        IconCartel
    },
    data(){
        return{
            title:'NACHO & ANDRE',
            subtitle: '¡NOS CASAMOS!'
        }
    }
}
</script>
<template>
    <div class="section_portada">
        <IconCartel class="box_cartel"/>
        <div class="text_overlay">
            <h1 class="title__cartel">{{ title }}</h1>
            <h2 class="subtitle__cartel">{{ subtitle }}</h2>
        </div>
    </div>
</template>

<style>
.section_portada {
    position: relative;
    display: inline-block;
}

.box_cartel {
    width: 100%; 
}

.text_overlay {
    width:100%;
    margin-top:.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.title__cartel,
.subtitle__cartel {
    color: var(--color__font_primary);
    line-height: 100%;
}

.title__cartel {
    font-family: Playfair Display SC;
    font-weight:400;
    font-style: normal;
    font-size: var(--font-size-32);
    color: #1E1E1E;
}

.subtitle__cartel {
    font-family:Playfair Display SC;
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
}
@media (min-width: 768px) and (max-width: 991px) {
    .title__cartel {
        font-size:48px;
    }

    .subtitle__cartel {
        font-size: var(--font-size-32);
    }    
}
@media (min-width: 1025px) {
    .title__cartel {
        font-size:72px;
    }

    .subtitle__cartel {
        font-size: var(--font-size-42);
    } 
}
</style>