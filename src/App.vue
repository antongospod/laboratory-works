<template>
  <v-app>
    <v-main>
    <v-card>
      <v-toolbar
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
            <v-tabs-slider color="yellow darken-3"></v-tabs-slider>

            <v-tab
                    v-for="item in items"
                    :key="item.tab"
                    :to="item.link"
            >
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-container fluid class="mb-10">
          <router-view />
      </v-container>
    </v-card>
    </v-main>
    <v-footer
            class="mt-auto"
            absolute
            padless
            dark
    >
      <v-row
              justify="center"
              no-gutters
      >
        <v-btn
                v-for="item in items"
                :to="item.link"
                :key="item.link"
                color="white"
                text
                rounded
                class="my-2"
        >
          {{ item.tab }}
        </v-btn>
        <v-col
                class="py-4 text-center white--text"
                cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
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
      }
    },
  };
</script>
