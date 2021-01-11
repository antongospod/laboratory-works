<template>
  <div id="app">
<!--    <router-view />-->
    <v-card>
      <v-toolbar
              color="cyan"
              dark
              flat
      >
        <v-btn icon>
          <v-icon>mdi-school</v-icon>
        </v-btn>

        <v-toolbar-title>09.03.02 Лабораторные работы (ИСТ семестр 1) Скрипченко А.С </v-toolbar-title>

        <template v-slot:extension>
          <v-tabs
                  v-model="tab"
                  align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab
                    v-for="item in items"
                    :key="item"
                    :to="item.link"
            >
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <router-view />
    </v-card>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: 'Программа линейной структуры', link: '/' },
          { tab: 'Управляющий оператор – цикл', link: '/control-operator-loop' },
          { tab: 'Массивы', link: '/arrays' },
          { tab: 'Функции', link: '/functions' },

        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  };
</script>
