<script>
import PortadaVue from '../components/portada/PortadaVue.vue';
import OrnamentalLeft from '@/components/icon/Ornamental.vue';
import OrnamentalRight from '@/components/icon/Ornamental2.vue';
export default {
    name: 'Home',
    components: {
        PortadaVue,
        OrnamentalLeft,
        OrnamentalRight
    }
}
</script>
<template>
    <div class="home_container container">
        <div class="home_content">
            <OrnamentalLeft class="home_box1"/>
            <PortadaVue class="home_box2"/>
            <OrnamentalRight class="home_box3"/>
        </div>
    </div>
</template>
<style>
.home_container {
    background: var(--color__background);
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.home_content{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: row;
}
.home_box1{
    position:relative;
    z-index: 0;
    left:18%;
}

.home_box3{
    position:relative;
    z-index: 0;
    right:18%;
}
@media screen and (max-width:320px) {
    .home_box1{
        left: 30%;
    }
    .home_box3{
        right: 30%;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .home_box1{
        left: 25%;
    }
    .home_box3{
        right: 25%;
    }
}
@media (min-width: 1025px) {
    .home_box1{
        left: 30%;
    }
    .home_box3{
        right: 30%;
    }
}   

</style>