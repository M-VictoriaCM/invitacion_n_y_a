<script>
import IconLocation from '../icon/IconLocation.vue';
import PopupBase from './PopupBase.vue';
import Boton from '../Boton.vue';
export default {
    components: { 
        PopupBase,
        IconLocation,
        Boton
    },
    data() {
        return {
        infoBtn: '¿CÓMO LLEGAR?',
        modalTitle: 'Cómo llegar a la ceremonia',
        mapUrl:'https://maps.app.goo.gl/fmpYruZ6k7LVyYcq8'
        };
    }, 
    methods:{
        openMap(){
            window.open(this.mapUrl, '_blank');
        }   
    }
};
</script>
<template>
    <popup-base :title="modalTitle" >
        <template #icon>
            <div class="circle">
                    <IconLocation class="icon__circle"/>
            </div>
        </template>
        <div class="modal-body">
            <div class="map-container">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d678246.9104413688!2d-60.5786714!3d-37.9798081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9593addc32e18ad1%3A0xbd4e54ed0bcf17f7!2sParroquia%20Nuestra%20Se%C3%B1ora%20de%20Luj%C3%A1n!5e1!3m2!1ses-419!2sar!4v1725685904320!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <template #footer>
            <Boton label="ABRIR APP" customClass="btn-mayor" @click="openMap()"/>
        </template>
    </popup-base>
</template>

<style scoped>
.circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--color__circle);
    border: 1px solid var(--color__principal_dark);
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    z-index: 2;
}

.icon__circle{
  width:100%;
  display:flex;
  justify-content: center;
}

::placeholder{
    color:rgb(165, 165, 165);
}

.map{
    width:260px;
    height:250px;
}
@media(max-width:320px) {   
    

    .map{
        margin-top:2rem;
        width:200px;
    }
}

@media(max-width:360px) {
    
    .circle{
        width: 45px;
        height:45px;
    }
    
    
}
@media (min-width: 768px) and (max-width: 991px){
    
    .btn-primary{
        width:60%;
    }
}
@media (min-width: 1025px) {
    
    
    .circle{
        width: 90px;
        height:90px;
    }
    .pop-up-footer{
        width:100%;
    }
    .btn-primary{
        width:50%;
    }
}

</style>