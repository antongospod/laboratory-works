<template>
  <div class="home">
    <h1 class="text-center">Программа линейной структуры</h1>
    <v-card-title class="overline"
      >Задание 12. Заданы длины сторон треугольника. Найти его
      площадь.</v-card-title
    >

    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              rounded
              outlined
              dense
              color="yellow darken-3"
              v-model="len1"
              :rules="lenRules"
              label="Введите длину для 1 стороны"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              rounded
              outlined
              dense
              color="yellow darken-3"
              v-model="len2"
              :rules="lenRules"
              label="Введите длину для 2 стороны"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              rounded
              outlined
              dense
              color="yellow darken-3"
              v-model="len3"
              :rules="lenRules"
              label="Введите длину для 3 стороны"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card-title v-if="len1 && len2 && len3">
          Площадь треугольника: {{ square }}
        </v-card-title>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "TheLinearStructureProgram",
  data: () => ({
    valid: false,
    len1: "",
    len2: "",
    len3: "",
    lenRules: [v => !!v || "Поле является обязательным"]
  }),
  computed: {
    square: function() {
      let semiPerimeter = (this.len1 + this.len2 + this.len3) * 0.5;
      return Math.sqrt(
        semiPerimeter *
          (semiPerimeter - this.len1) *
          (semiPerimeter - this.len2) *
          (semiPerimeter - this.len3)
      );
    }
  }
};
</script>
