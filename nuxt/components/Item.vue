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
        <div class="item__text">
            <div class="item__name">
                <a href={{ link }}>{{ name }}</a>
            </div>
            <div class="item__description">{{ description }}</div>
        </div>

        <div class="item__pic">
            <img :src=pic />
        </div>
        <div class="item__arrow-toggle"></div>
    </div>
</template>

<style lang="scss" scoped>
.list__item {
    display: flex;
    gap: 2rem;
}
.item__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.item__name {
    font-family: "Rubik";
    font-size: 4rem;
    font-weight: bold;
}
.item__description {
    font-size: 2.3rem;
}
.item__pic {
    width: 10rem;
    height: 10rem;
}
</style>