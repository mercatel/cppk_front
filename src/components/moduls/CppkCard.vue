<template>
  <v-app>
    <div class="card">
      <div class="card_img_preview">
        <img :src="img_preview" alt="">
      </div>
      <div class="card_title">{{ title }}</div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "CppkCard",
  data() {
    return {
      img_preview: "https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5ca49ff95ec13d00b4402001_5ca4a00bf4bebc00b35a57b3/scale_1200",
      title: "Бухгалтер",

    }
  }

}
</script>

<style lang="scss">
.card {
  margin-top: 10px ;
  width: 400px;
  height: 200px;
  border: 1px solid black;
  display: flex;
 .card_img_preview{
   align-self: center;
    img {
    width: 80%;
    margin: 10px;
    border-radius: 45%;

  }
 }

  .card_title{
    background: #9b2828;
    font-size: 18px;
    padding: 20px;
    align-self: center;
  }
}


</style>