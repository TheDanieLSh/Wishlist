<script>

export default {
    props: {
        name: String,
        link: String,
        pic: String,
        description: String
    }
}

</script>

<template>

    <div class="list__item">
        <div class="item__name">
            <a href={{ link }}>{{ name }}</a>
        </div>
        <div class="item__pic">
            <img :src=pic />
        </div>
        <div class="item__arrow-toggle"></div>
        <div class="item__description">{{ description }}</div>
    </div>

</template>

<style scoped>
.item__name {
    font-family: "Rubik";
    font-size: 5rem;
    font-weight: bold;
}

.item__description {
    font-size: 3rem;
}
</style>