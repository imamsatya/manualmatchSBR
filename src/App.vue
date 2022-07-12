<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
     <router-link to="/mypage">MyPage</router-link>
  </div> -->
  <router-view/>
  <!-- <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view> -->
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  /* @font-face {
  font-family: "Merienda";
  src: local("Merienda"),   url(./fonts/Merienda/Merienda-Regular.ttf) format("truetype");

} */

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

   /* transition */
    /* .slide-enter-active,
    .slide-leave-active{
        transition: opacity 1s, transform 1s;
    }
    .slide-enter-from,
    .slide-leave-to{
        opacity: 0;
        transform: translateX(-10%);
    } */
</style>