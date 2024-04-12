<template>
    <div class="list">
        <Item name="Test item" link="https://google.com" pic="test" description="Test description"/>
    </div>
</template>

<script>

import Item from './Item.vue'

</script>

<style scoped>

.list {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20rem;
    font-family: "Rubik";
}

</style>