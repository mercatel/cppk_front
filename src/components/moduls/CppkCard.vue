<template>
  <div class="mycard">
        <img :src="img_preview">
        <div class="card_title">{{ title }}</div>
  </div>
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
  //max-width: 280px;
  max-height: 200px;
  flex: 1 1 280px;
  display: flex;
  cursor: pointer;

  img {
    object-fit: cover;
    max-width: 100%;
  }

  .card_title {
    color: white;
    text-align: center;
    font-size: 30px;
    align-self: flex-end;
    margin: 0 -100%;
    height: 50%;
    width: 100%;
    background-color: #0552ff73;
  }

}

.mycard:hover {
  border: 2px solid #0034ef;
  box-shadow: 5px 3px 8px #0034ef;
}


</style>