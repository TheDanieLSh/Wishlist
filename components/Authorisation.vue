<template>
    <div class="auth">
        <h1>Авторизация</h1>
        <form ref="authForm" @submit.prevent="validateForm" autocomplete="off">
            <input type="text" name="login" placeholder="Логин" />
            <input type="password" name="password" placeholder="Пароль" />
            <button>
                <div>Войти</div>
            </button>
        </form>
    </div>
</template>

<script>

export default {
    methods: {
        async validateForm() {
            await fetch('/api/auth', {
                method: 'POST',
                body: new FormData(this.$refs.authForm),
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                });
        },
    },
};
</script>

<style lang="scss">
.auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;
        
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
        & button div {
            padding: 0.5rem;
            border-radius: 0.5rem;
        }
    }
}
</style>