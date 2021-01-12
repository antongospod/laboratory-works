<template>
  <v-app>
    <v-main>
      <v-card>
        <v-app-bar app dark flat>
          <v-btn icon>
            <v-icon>mdi-school</v-icon>
          </v-btn>

          <v-app-bar-title
            >09.03.02 Лабораторные работы (ИСТ семестр 1) Скрипченко А.С
          </v-app-bar-title>

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="yellow darken-3"></v-tabs-slider>

              <v-tab v-for="item in items" :key="item.tab" :to="item.link">
                {{ item.tab }}
              </v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-container fluid class="mb-10">
          <router-view />
        </v-container>
      </v-card>
    </v-main>
    <v-footer class="mt-auto" padless dark>
      <v-row justify="center" no-gutters>
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
        <v-col class="py-4 text-center white--text" cols="12">
          <v-btn
            class="mx-2"
            fab
            outlined
            small
            color="#2787F5"
            href="https://vk.com/antongxpod"
          >
            <v-icon>
              mdi-vk
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            outlined
            small
            color="#e4405f"
            href="https://www.instagram.com/antongospod/"
          >
            <v-icon>
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            outlined
            small
            color="fafafa"
            href="https://github.com/antongospod"
          >
            <v-icon>
              mdi-github
            </v-icon>
          </v-btn>
        </v-col>
        <v-col class="py-4 text-center white--text" cols="12">
          Make with <v-icon color="#e4405f">mdi-cards-heart</v-icon> by
          <strong>Skripchenko Anton</strong> in {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: "Программа линейной структуры", link: "/" },
        { tab: "Управляющий оператор – цикл", link: "/control-operator-loop" },
        { tab: "Массивы", link: "/arrays" },
        { tab: "Функции", link: "/functions" }
      ]
    };
  }
};
</script>
