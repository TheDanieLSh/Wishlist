<template>
    <div :class="[ 'Test', { 'Test_light': classValue } ]">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit incidunt dignissimos repellendus dolores consequatur, iusto optio in quibusdam dolore, animi vero beatae obcaecati voluptatum ipsa deleniti odit ipsum officia!</p>
        <button @click="classValue = !classValue">test toggle</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            classValue: false,
        };
    },
};
</script>

<style lang="scss">
.Test {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    background-color: lightblue;
    color: darkblue;

    &_light {
        background-color: darkblue;
        color: lightblue;
    }
}
</style>
