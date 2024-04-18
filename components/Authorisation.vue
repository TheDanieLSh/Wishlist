<template>
    <div class="auth">
        <h1>Авторизация</h1>
        <form>
            <input type="text" method="post" name="login" placeholder="Логин" />
            <input type="text" method="post" name="password" placeholder="Пароль" />
        </form>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;
}
h1 {
    text-align: center;
    font-family: "Rubik";
    font-size: 4rem;
}
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & input {
        width: 30rem;
        height: 3rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
}
</style>