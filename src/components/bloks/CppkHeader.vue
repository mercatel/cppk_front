<template>
  <div class="header">
    <div class="header_top">
      <div class="header_top-phone">{{ phone }}</div>
      <div class="header_top-operating_mode">Режим работы: {{ operating_mode }}</div>
      <div class="header_top-address">Адрес: {{ address }}</div>
    </div>
    <div class="header_bottom">
      <div class="header_bottom-logo">
        <img :src="logo" alt="">
      </div>
      <div class="header_bottom-menu">
        <a class="menu-item">Home</a>
        <a class="menu-item">Tab 1</a>
        <a class="menu-item">Tab 2</a>
        <a class="menu-item">Tab 3</a>
        <a class="menu-item">Tab 4</a>
        <a class="menu-item">Tab 5</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CppkHeader",
  data() {
    return {
      logo: "https://cppk.lc/sites/all/themes/sub_professional_theme/logo.png",
      phone: "8-800-700-11-52",
      operating_mode: "c 8:30 до 17:30",
      address: "г.Уфа, ул. Цюрупы, 17",
    }
  }
}
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  background: #4282b082;
  padding-bottom: 10px;
  z-index: 100;

  .header_top {
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    font-size: 24px;
    color: white;


    .header_top-phone {
      font-size: 30px;
    }
  }

  .header_bottom {
    display: flex;


    .header_bottom-menu {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: flex-end;

      a {
        color: white;
        //border: 1px solid white;
        font-size: 20px;
        max-width: 200px;
        padding: 10px 50px;
        border-radius: 5%;
      }

      a:hover {
        box-shadow: 1px 0 10px rgba(0, 0, 0, 0.5);
      }
    }
  }
}


</style>