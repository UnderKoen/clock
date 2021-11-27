<template>
  <div class="clock" @click="next">
    <h1>{{(time / 60 | 0).pad(2)}}:{{(time % 60).pad(2)}}</h1>
  </div>
</template>

<script>
import firebase from "@/firebase";

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

const firestore = firebase.firestore();

export default {
  name: "clock",
  data: () => ({
    name: "koen",
    game: "test",
    reference: null,
    data: null,
  }),
  computed: {
    time() {
      if (!this.init) return 0;
      return this.data.time[this.name];
    },
    init() {
      return this.data != null;
    },
    turn() {
      if (!this.init) return false;
      return this.data.turn === this.name;
    },
  },
  mounted() {

    this.reference = firestore.collection("clock").doc(this.game);

    this.reference.onSnapshot(snapshot => {
      this.data = snapshot.data();
    });
    this.start();
  },
  methods: {
    start() {
      const loop = setInterval(() => {
        if (!this.turn) clearInterval(loop);
        this.data.time[this.name] -= 1;
        this.reference.set(this.data);
      }, 1000);
    },
    next() {
      if (!this.turn) return;
      const players = this.data.players;
      let i = players.indexOf(this.name);
      i++;
      i %= players.length;
      this.data.turn = this.data.players[i];
      this.reference.set(this.data);
    },
  }
}
</script>

<style scoped>
.clock {
  width: 100vw;
  height: 100vh;
}
</style>