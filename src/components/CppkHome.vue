<template>
  <v-app>
    <div class="container">
      <div class="cards ">
        <cppk-card/>
        <cppk-card/>
        <cppk-card/>
        <cppk-card/>
        <cppk-card/>
        <cppk-card/>
        <cppk-card/>
        <cppk-card/>
      </div>
      <div class="rss_news">
        <cppk-news/>
      </div>
    </div>
  </v-app>
</template>

<script>

import CppkCard from "@/components/moduls/CppkCard";
import CppkNews from "@/components/moduls/CppkNews";

export default {
  name: 'Home',
  components: {CppkNews, CppkCard}
}
</script>
<style lang="scss">
#app{
  background: white;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>