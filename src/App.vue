<template>
  <div id="app">
    <div v-for="(item, index) in list">
      <Lottie :options="defaultOptions(index)" :height="400" :width="400" />
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import data_list from "./data";

export default {
  name: "app",
  components: {
    Lottie
  },
  data() {
    return {
      list: data_list
    };
  },
  methods: {
    defaultOptions(index) {
      return {
        animationData: this.list[index]
      };
    }
  }
};
</script>

<style>
#app > div {
  display: inline-block;
}
</style>
