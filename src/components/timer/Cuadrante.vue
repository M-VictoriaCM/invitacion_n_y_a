<script>
import Timer from '@/components/timer/Timer.vue';
export default{
    name:'Cuadrante',
    components:{
        Timer
    }
}
</script>
<template>
    <div class="container__cuadrante">
        <Timer/>        
    </div>
</template>
<style>
.container__cuadrante{
    margin-top:2rem;
    width:300px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: .5rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container__cuadrante{
        width:500px;
        height:350px;
    }

}
@media (min-width: 1025px) {
    .container__cuadrante{
        width:100%;
        height:auto;
        margin-top:170px;
    }
}
</style>