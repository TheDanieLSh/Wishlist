<template>
  <header>
    <Authorisation />
  </header>
  <main>
    <List />
  </main>
  <footer>

  </footer>
</template>

<script>
import Authorisation from './components/Authorisation.vue';
import List from './components/List.vue'
</script>

<style>
@import 'reset-css';
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 10px;
}
a {
    text-decoration: none;
    color: inherit;
}

header {
  display: flex;
  justify-content: center;
}
main {
  display: flex;
  justify-content: center;
}
</style>