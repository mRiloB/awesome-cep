<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
$primary: #3cb44b;

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

html,
body {
  background: $primary;
}

#app {
  height: 100%;
  padding: 10px;
}
</style>
