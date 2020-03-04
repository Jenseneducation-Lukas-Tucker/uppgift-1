<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/addcard">Add Card</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
      font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: PT Mono,monospace;
    padding: 1rem;
    height: 100vh;
    max-width: 24rem;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
html {
    display: block;
    color: -internal-root-color;
}

.div{
  display: block;
}

</style>
