<template>
    <router-link class="mycard card_anim draw meet" to="/news">
      <img :src="img_preview">
      <div class="card_title">{{ title }}</div>
    </router-link>

</template>

<script>
export default {
  name: "CppkCard",
  data() {
    return {
      img_preview: "https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5ca49ff95ec13d00b4402001_5ca4a00bf4bebc00b35a57b3/scale_1200",
      title: "Профессиональная переподготовка",
    }
  }

}
</script>

<style lang="scss">
.mycard {
  margin: 2px;
  max-height: 100px;
  flex: 1 1 150px;
  display: flex;
  cursor: pointer;
  box-shadow: 1px 1px 20px #000000;

  img {
    object-fit: cover;
    max-width: 100%;
  }

  .card_title {
    color: white;
    text-align: center;
    font-size: 18px;
    align-self: flex-end;
    margin: 0 -100%;
    height: 50%;
    width: 100%;
    background-color: #0552ff73;
  }

}

.mycard:hover {
  .card_title {
    background-color: #0552ffc4;
  }

}


</style>