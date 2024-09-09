<template>
    <div>
        <svg class="location" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 792 792"
            style="enable-background:new 0 0 79 79;" xml:space="preserve">
            <g>
                <path d="M396,0C215.316,0,126,125.928,126,281.268S396,792,396,792s270-355.392,270-510.732S576.684,0,396,0z M396,378
		c-79.524,0-144-64.476-144-144S316.476,90,396,90c79.524,0,144,64.476,144,144S475.524,378,396,378z" />
            </g>

        </svg>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.location {
    width: 60px;
    height: 60px;
    animation: 2.5s ease 0s infinite beat;
    transform-origin: center center;
    fill: #8A8484;
}

@keyframes beat {

    /*Animacion del corazon*/
    0%,
    50%,
    100% {
        transform: scale(1, 1);
    }

    30%,
    80% {
        transform: scale(0.92, 0.95);
    }
}

@media (min-width: 1025px) {
    .location {
        width: 60px;
        height: 60px;
    }
}
</style>