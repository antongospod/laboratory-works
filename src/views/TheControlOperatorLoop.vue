<template>
  <div class="about">
    <h1>Управляющий оператор – цикл (Вариант 12)</h1>
    <v-card class="mx-auto my-12">
      <v-card-title>Задача № 2. Создайте программу, выводящую на экран первые 55 элементов последовательности 1 3 5 7 9 11 13 15 17 ….</v-card-title>
      <v-card-text>{{loop}}</v-card-text>
    </v-card>

    <v-card class="mx-auto my-12">
      <v-card-title>Задача № 19.	Пользователь вводит с клавиатуры последовательность ненулевых целых чисел. Программа должна вывести на экран среднее арифметическое элементов этой последовательности сразу после того, как пользователь введёт 0 </v-card-title>
      <v-container fluid>
        <v-row>
          <v-col
                  cols="12"
                  md="12"
          >
            <v-text-field
                    color="yellow darken-3"
                    @keydown="onKeydown"
                    v-if="valid"
                    v-model="values"
                    label="Введите последовательность чисел"
                    required
            ></v-text-field>
            <v-card-actions>
              <div v-if="valid === false" class="font-weight-bold">Среднее арифмитическое: </div>{{' '+sequence}}
              <v-spacer />
              <v-btn outlined @click="clear" v-if="valid === false">Очистить</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "ControlOperatorLoop",
  data: () => ({
    valid: true,
    out: [],
    values: '',
  }),
  computed: {
    loop: function () {
      let result = '';
      for (let a=1, b=1; a<=55; a++, b=b+2) {
        result += b + " "
      }
      return result
    },
    sequence: function () {

      let number = this.values,
              output = [],
              sNumber = number.toString();

      for (let i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
      }
      if (this.valid === false) {
        let sum = 0;
        let count = output.length;
        for (let i=0; i<count; i++) {
          sum += output[i];
        }
        if (!isNaN(sum/count)) {
          return sum/count;
        } else return 'Что-то пошло не так'
      }
      else
        return 'Введите последовательность чисел, а после 0, чтобы увидеть результат'
    }
  },
  methods: {
    onKeydown(e) {
      if (e.keyCode === 48) {
        this.valid = false;
      }
    },
    clear() {
      this.values = '';
      this.valid = true;
    }
  }
};
</script>
