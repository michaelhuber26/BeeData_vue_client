<template>
  <div>
    <img alt="logo" src="./assets/logo.png" width="100" height="100" />
    <BeeData />
  </div>
</template>

<script>
import BeeData from "./components/beedata";

export default {
  name: "App",
  components: {
    BeeData,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
