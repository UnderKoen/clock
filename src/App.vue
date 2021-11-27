<template>
  <div id="app">
    <clock/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Clock from "@/components/Clock.vue";

@Component({
  components: {
    Clock,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
