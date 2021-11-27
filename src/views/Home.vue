<template>
  <div class="home">
    Game:
    <input placeholder="game" v-model="game">
    <br>
    <br>
    Name:
    <input placeholder="name" v-model="name">
    <br>
    <br>
    <button @click="join">Join</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    game: "",
    name: ""
  }),
  methods: {
    join() {
      this.$router.push({name: "Clock", query: {game: this.game, name: this.name}});
    }
  }
}
</script>
