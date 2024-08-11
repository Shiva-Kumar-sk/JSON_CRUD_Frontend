<template>
  <div id="app">
    <!-- <HelloWorld></HelloWorld> -->
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/update-item">update</router-link>
      <router-link to="/create-item">create</router-link>


    </nav> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components:{
    // HelloWorld
  }
};
</script>