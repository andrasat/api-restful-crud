<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-left">
        <p class="nav-item"><router-link to="/">Main Page</router-link></p>
        <p class="nav-item"><router-link to="/create">Create New Memo</router-link></p>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.title {
  margin: 1em 0;
  text-align: center;
}
</style>
