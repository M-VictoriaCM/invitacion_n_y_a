<script>
export default{
    name:'Boton',
    props: {
    label: {
      type: String,
      required: false 
    },
    customClass: {
      type: String,
      default: 'btn-mayor'
    }
  }

}
</script>
<template>
   <button type="button" :class="['btn', customClass, 'btn-lg']">
      {{ label }}
    </button>
</template>
<style>
.btn-mayor{
    width: 300px;
    background: transparent;
    color:var(--color_font_btn);
    border: 1px solid var(--line__buttom);
    font-family: Playfair Display;
    font-size: var(--font-size-18);
    padding: .75rem 1rem;
    font-weight: 400;
    font-style: normal;
}
.btn-mayor:hover{
    background:var(--color_font_btn);
    color:var(--font-light);
}
</style>