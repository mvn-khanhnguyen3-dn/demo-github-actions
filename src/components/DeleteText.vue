<template>
    <font-awesome-icon class="btn-delete" @click=" this.handleDeleteProps(id)" icon="fa-solid fa-trash" />
</template>
<script>
export default {
    props:{
        handleDeleteProps:Function,
        id:Number
    },
}
</script>
<style scoped>
    .btn-delete{
        cursor: pointer;
        margin-right: .5rem;
    }
</style>
