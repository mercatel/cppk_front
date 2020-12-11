<template>
  <v-app>
    <div class="card_container">
      <cppk-card/>
      <cppk-card/>
      <cppk-card/>
      <cppk-card/>
    </div>
  </v-app>
</template>

<script>

import CppkCard from "@/components/moduls/CppkCard";

export default {
  name: 'Home',
  components: {CppkCard}
}
</script>
<style lang="scss">
.card_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>