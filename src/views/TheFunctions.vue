<template>
  <div class="arrays">
    <h1 class="text-center">Функции (Вариант 12)</h1>
    <v-card outlined class="mx-auto my-12">
      <v-card-title class="overline"
        >Задача № 2. Входные данные: - строка [0,100]; - подстрока [0,100].
        Удалить первое вхождение подстроки в строку.
      </v-card-title>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              rounded
              outlined
              dense
              counter="100"
              color="yellow darken-3"
              v-model="string"
              label="Введите строку"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              rounded
              outlined
              dense
              counter="100"
              color="yellow darken-3"
              v-model="subString"
              label="Введите подстроку"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          <div class="overline">{{ removeBySubString }}</div>
        </v-card-actions>
      </v-container>
    </v-card>

    <v-card outlined class="mx-auto my-12">
      <v-card-title class="overline"
        >Задача № 19. Входные данные: - строка [0,100]. Разделителями считаются:
        кавычки (‘ ’ “ ”), пробел. Удалить все разделители из строки.
      </v-card-title>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              rounded
              outlined
              dense
              counter="100"
              color="yellow darken-3"
              v-model="string2"
              label="Введите строку"
              required
            ></v-text-field>
            <v-card-actions>
              <div class="overline">{{ removeSpecialCharacter }}</div>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "TheFunctions",
  data: () => ({
    string: "",
    string2: "",
    subString: ""
  }),
  computed: {
    removeSpecialCharacter: function() {
      let number = this.string2;
      if (number.length < 100) {
        return number.replace(/[\s.,"'%]/g, "");
      } else {
        return "Вы ввели более 100 символов";
      }
    },
    removeBySubString: function() {
      let str = this.string;
      let subStr = this.subString;
      if (str && subStr !== "") {
        if (str.length < 100) {
          return str.replace(subStr + ", ", "");
        } else {
          return "Вы ввели более 100 символов";
        }
      } else {
        return "Введите значения в инпут";
      }
    }
  }
};
</script>
