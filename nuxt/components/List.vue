<template>
    <div class="list">
        <Item name="Test item" link="https://google.com" pic="test" description="Test description"/>
    </div>
</template>

<script>

import Item from './Item.vue'

</script>

<style>

.list {
    position: relative;
    display: flex;
    justify-content: left;
    width: 95%;
    margin-top: 20rem;
    font-family: "Rubik";
}

</style>