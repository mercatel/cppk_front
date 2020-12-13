<template>
  <v-app>
    <cppk-header/>
    <v-parallax height="700" src="https://www.samsebaya.com/img/sliders/55slide03.jpg"></v-parallax>
    <div class="main-container">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import CppkHeader from "@/components/bloks/CppkHeader";

export default {
  name: 'App',

  components: {
    CppkHeader,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">

.main-container {
  position: relative;
  margin: -400px auto 0 auto;
  border-radius: 25%;
  max-width: 1200px;

}

</style>
