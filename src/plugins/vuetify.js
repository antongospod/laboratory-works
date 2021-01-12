import Vue from "vue";
import Vuetify from "vuetify/lib";
import ru from "vuetify/es5/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ru },
    current: "ru"
  },
  /*Кастомная тема*/
  theme: {
    themes: {
      dark: {
        primary: "#6d84e4",
        secondary: "#00AACC",
        accent: "#00c2ff",
        error: "#cf6679",
        warning: "#ffc107",
        info: "#009688",
        success: "#4caf50"
      },
      light: {
        primary: "#0044cc",
        toolbar: "#e3ecfc",
        secondary: "#00AACC",
        accent: "#00c2ff",
        error: "#b00020",
        warning: "#ffc107",
        info: "#009688",
        success: "#4caf50",
        background: "#000" // Not automatically applied
      }
    }
  }
});
