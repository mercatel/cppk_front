<template>
  <div class="new">
    <router-link to="/">
      <div class="new_title">
        <h1>Информируем Вас о смене адреса офиса "Центр профессиональной подготовки кадров"</h1>
      </div>
    </router-link>
    <div class="new_content" v-html="test">
    </div>

  </div>
</template>

<script>
export default {
  name: "CppkNews",
  data(){
    return {
      test: "<p><img alt=\"\" height=\"480\" src=\"https://cppk.lc/sites/default/files/styles/large/public/adress.png?itok=QVOm88XU\" width=\"480\" /></p>\n" +
          "\n" +
          "<p><strong>Уважаемые друзья, коллеги, партнеры и наши участники обучающих мероприятий!&nbsp;</strong></p>\n" +
          "\n" +
          "<p>Рады сообщить Вам, что Мы переехали в новый офис, который находится по адресу:</p>\n" +
          "\n" +
          "<p>&nbsp;г. Уфа, ул. Цюрупы, д.17 (ост. Октябрьской революции).&nbsp;</p>\n" +
          "\n" +
          "<p><strong>График работы:</strong>&nbsp;</p>\n" +
          "\n" +
          "<p>Пн-Пт: 8:30 - 17:30</p>\n" +
          "\n" +
          "<p>Сб-Вс: выходные дни</p>\n" +
          "\n" +
          "<p>Мы делаем всё для своих клиентов: теперь наш офис стал больше, удобнее, практичнее и современнее.</p>\n" +
          "\n" +
          "<p><strong>Связаться с нами:&nbsp;</strong></p>\n" +
          "\n" +
          "<p>+7 (347) 251 11 52&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8 800 700 11 52</p>\n" +
          "\n" +
          "<p>&nbsp;<a href=\"http://cppk.lc/\" style=\"font-size: 13px;\" target=\"_blank\">Наш сайт</a>&nbsp; &nbsp;<a href=\"https://vk.com/cppkrb\" style=\"font-size: 13px;\" target=\"_blank\">Мы ВКонтакте</a>&nbsp; &nbsp;<a href=\"https://www.facebook.com/groups/1959022707648265\" style=\"font-size: 13px;\" target=\"_blank\">Мы в Facebook</a>&nbsp;<a href=\"https://www.instagram.com/cppkrb/\" target=\"_blank\">Мы в instagram</a>&nbsp;</p>"
    }
  }
}
</script>

<style lang="scss">
.new {
  padding-top: 10px;
  .new_title {
    padding: 3%;
    text-align: center;
    color: #121313;
    margin: 2%;
    background: $bgheader;
    border-radius: 5px;


  }

  .new_title:hover {
    background: $bgheader-hover;
  }


  .new_content {
    padding: 5%;

  }
}
</style>