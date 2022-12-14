<template>
    <font-awesome-icon class="btn-edit" @click.prevent="this.handleUpdateProps(id)" icon="fa-solid fa-pen-to-square" />
</template>
<script>
export default {
    props:{
        handleUpdateProps:Function,
        id:Number,
    },
}
</script>
<style scoped>
    .btn-edit{
        cursor: pointer;
    }
</style>

