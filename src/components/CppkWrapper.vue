<template>
  <div class="wrapper">
    <cppk-header/>
    <v-parallax
        height="700"
        src="https://ceur.ru/files/2015/11/16/diplom.jpg"
    ></v-parallax>
    <cppk-nav-content/>
  </div>
</template>

<script>

import CppkHeader from "@/components/bloks/CppkHeader";
import CppkNavContent from "@/components/bloks/CppkNavContent";


export default {
  name: 'Wrapper',
  components: {CppkNavContent, CppkHeader},
  data() {
    return {}
  },
}
</script>
<style lang="scss">
.wrapper{
  display: flex;
  flex-direction: column;
}
</style>