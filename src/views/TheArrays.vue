<template>
  <div class="arrays">
    <h1 class="text-center">Массивы (Вариант 12)</h1>
    <v-card outlined class="mx-auto my-12">
      <v-card-title class="overline"
        >Задача № 2. Пользователь вводит: - размер массива [0,100]; - элементы
        массива [-100,100]. Программа преобразует массив следующим образом: все
        элементы с индексами 1,4,7,10,13… увеличивает на значение, равное
        предыдущему элементу массива. Вывести полученный массив на экран.
      </v-card-title>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              rounded
              outlined
              dense
              color="yellow darken-3"
              v-model="values"
              label="Введите элементы массива через запятую"
              required
            ></v-text-field>
            <v-card-actions>
              <div class="overline">{{ firstChangeArray }}</div>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card outlined class="mx-auto my-12">
      <v-card-title class="overline"
        >Задача № 19. Пользователь вводит: - размер массива [0,100]; - элементы
        массива [-100,100]. Поместить в начало массива элементы, сохраняя
        порядок элементов, элементы с нечетными индексами, а в конец массива
        элементы с четными индексами. Индекс 0 считается четным. Вывести
        полученный массив на экран.
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
              v-model="values2"
              label="Введите элементы массива через запятую"
              required
            ></v-text-field>
            <v-card-actions>
              <div class="overline">{{ secondChangeArray }}</div>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "TheArrays",
  data: () => ({
    values: "",
    values2: ""
  }),
  computed: {
    secondChangeArray: function() {
      let number = this.values2;
      let result = number.split(",").map(function(item) {
        return +item;
      });
      let resultArr = [];
      if (result.length < 100) {
        let max = Math.max.apply(null, result);
        let min = Math.min.apply(null, result);
        if (min < -100) {
          return "Введенное значение должно быть больше -100";
        }
        if (max > 100) {
          return "Введенное значение должно быть меньше 100";
        }
        if (isNaN(min || max)) {
          return "Введенное значение должно быть числом";
        } else {
          for (let i = 0; i < result.length; i++) {
            if (result[i] % 2 !== 0) {
              resultArr.unshift(result[i]);
            }
            if (result[i] % 2 === 0) {
              resultArr.push(result[i]);
            }
          }
        }
      }
      return resultArr;
    },
    firstChangeArray: function() {
      let number = this.values;
      let result = number.split(",").map(function(item) {
        return +item;
      });
      if (result.length < 100) {
        let max = Math.max.apply(null, result);
        let min = Math.min.apply(null, result);
        if (min < -100) {
          return "Введенное значение должно быть больше -100";
        }
        if (max > 100) {
          return "Введенное значение должно быть меньше 100";
        }
        if (isNaN(min || max)) {
          return "Введенное значение должно быть числом";
        } else {
          if (result.length >= 2) {
            for (let i = 1; i < result.length; i++) {
              if (i % 3 === 0) {
                result[i] += result[i - 1];
              }
            }
          }
        }
      }
      return result;
    }
  }
};
</script>
