<template>
  <v-app>
    <div class="blue darken-1 header py-2">
      <h1 class="text-center white--text">CHAT VUE</h1>
    </div>
    <router-view class="mt-4" />
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>
