<template>
  <div id="app">
    <cppk-header/>
    <v-parallax height="800" src="https://www.samsebaya.com/img/sliders/55slide03.jpg"></v-parallax>
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import CppkHeader from "@/components/bloks/CppkHeader";

export default {
  name: 'App',

  components: {
    CppkHeader,
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
body{
  background: #000000;
}

.main-container {
  background: white;
  position: relative;
  margin: -400px auto 0 auto;
  max-width: 1200px;

}

</style>
