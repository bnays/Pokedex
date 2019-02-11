<template>
  <div>
    <h1>Team {{type}}</h1>
    <ul>
      <li v-for="(t, index) in team" :key="t.id">
        {{t.name}}
        <i>Works as</i> {{t.designation[0]}}
        <button class="btn" @click="removeFromTeam({type, index, t})">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
  props:["type"],

  methods:{
    ...mapActions(["removeFromTeam"])
    // removeFromTeam(type,index, t){
    //   this.$store.dispatch("removeFromTeam", {type, index, t});
    // }
  },

  computed:{
    team(){
      return this.type === "A" ? this.$store.state.teamA : this.$store.state.teamB;
    }
  },

  // created() {
  //     this.$store.dispatch("getTeam");
  // }
}
</script>

