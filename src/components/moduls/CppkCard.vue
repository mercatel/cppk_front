<template>

  <div class="card">
    <div class="card_img_preview">
      <img :src="img_preview" alt="">
    </div>
    <div class="card_title">
      <div class="title"> {{ title }}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CppkCard",
  data() {
    return {
      img_preview: "https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5ca49ff95ec13d00b4402001_5ca4a00bf4bebc00b35a57b3/scale_1200",
      title: "Бухгалтерfffffffffffff",

    }
  }

}
</script>

<style lang="scss">
.card {
  flex: 1 0 300px;
  max-height: 200px;
  border: 1px solid black;
  .card_img_preview {
    align-self: center;
    position: relative;
    img {
      max-width: 100%;
      max-height: 200px;
    }
  }

  .card_title {
    align-self: center;
    .title {
      background: #4087b09e;
      font-size: 18px;
    }
  }
}


</style>