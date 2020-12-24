<template>
  <div class="header">
    <div class="header__contact">
      <div class="header__contact phone"
           v-for="phone in settings.phone"
           :key="phone.id">
        <div v-if="phone.is_main">{{ phone.title }}:{{ phone.phone }}</div>

      </div>
      <div class="header__contact email">{{ settings.contact_email }}</div>
      <div class="header__contact address">{{ settings.contact_address }}</div>
      <div class="header__contact time-work">Режим работы: {{ settings.time_work }}</div>
    </div>
    <div class="header__top-menu">
      <div class="header__logo">
        <img :src="settings.logo" alt="...">
      </div>
      <div class="header__menu">
        <ul class="header__menu menu">
          <li v-for="item in menu" :key="item.id" class="menu_item">
            <div v-if="!item.submenu.length">
              <a :href="item.link">
                {{ item.title }}
              </a>

            </div>
            <div v-else>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">{{ item.title }}</div>
                </template>
                <v-list>
                  <v-list-item v-for="subitem in item.submenu" :key="subitem.id">
                    <v-list-item-title class="red--text"
                                       style="cursor: pointer; padding: 10px"

                    ><a :href="subitem.link">{{ subitem.title }}</a></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

            </div>
          </li>
        </ul>
      </div>
      <div class="header__search">
        <form class="form__search">
          <input type="text" placeholder="Искать здесь...">
          <button type="submit">
            <v-icon>
              mdi-checkbox-marked-circle
            </v-icon>
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "CppkHeader",
  components: {},
  data() {
    return {
      settings: {},
      menu: {},
    }
  },
  methods: {},
  mounted() {
    axios
        .get(this.$store.state.settings.state.url)
        .then(response => {
          this.settings = response.data[0];
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    axios
        .get(this.$store.state.menu.state.url)
        .then(response => {
          console.log(response.data)
          this.menu = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
  }
}
</script>

<style lang="scss">
a {
  color: black !important;
}

.header {
  position: fixed;
  max-height: 250px;
  width: 100%;
  background-color: rgba(246, 235, 235, 0.4);
  box-shadow: 0 0 10px black;
  z-index: 100;

  .header__contact {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-transform: uppercase;
    padding: 10px 0 10px 0;
  }

  .header__top-menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0 10px 0;


    .header__logo {
      flex: 1 0 20%;
      margin-left: 20px;
    }

    .header__menu {
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      flex: 1 0 300px;

      .menu_item {
        text-transform: uppercase;
        cursor: pointer;
        flex: 0 1 100%;
      }

      .menu_item:hover {
        font-weight: 800;
      }
    }

    .header__search {
      flex: 0 1 300px;
      align-self: flex-end;

      .form__search {
        display: flex;
        margin: auto 15px;

        input {
          width: 100%;
          padding: 8px;
          border: 1px solid black;
          background-color: white;
        }
      }
    }
  }
}
</style>