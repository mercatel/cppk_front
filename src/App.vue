<template>
  <div id="app">
    <v-app :style="{background: $vuetify.theme.themes[theme].background}">
      <cppk-header/>
      <v-parallax height="700" src="https://www.samsebaya.com/img/sliders/55slide03.jpg"></v-parallax>
      <div class="main-container">
        <router-view/>
      </div>
    </v-app>
  </div>
</template>

<script>
import CppkHeader from "@/components/bloks/CppkHeader";

export default {
  name: 'App',

  components: {
    CppkHeader,
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  // mounted() {
  //   window.addEventListener('resize',function (){
  //     if(window.innerWidth>767){
  //
  //     }
  //   })
  // },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#app {
  background-color: black;

  a {
    text-decoration: none;
  }

}


.main-container {
  background: white;
  position: relative;
  margin: -400px auto 0 auto;
  max-width: 1200px;

}

</style>
