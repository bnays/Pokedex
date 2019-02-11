<template>
  <div>
    <h1>Students</h1>
    <ul>
      <li v-for="(std, index) in students" :key="std.id">
        {{std.name}}
        <i>Works as</i> {{std.designation[0]}}
        <button @click="addTeamMember({type:'A', index})" :disabled="std.selected">Team A</button>
        <button @click="addTeamMember({type:'B', index})" :disabled="std.selected">Team B</button>
      </li>
    </ul>

    <hr>

    <TeamComponent type="A"></TeamComponent>
    <TeamComponent type="B"></TeamComponent>
  </div>
</template>

<script>

import TeamComponent from "./TeamComponent";
import {mapState, mapActions} from "vuex";

export default {
  
  components :{ TeamComponent },
  
  data() {
    return {
    }
  },

  methods:{
    ...mapActions(["addTeamMember"])
    // addTeamMember(type, index){
    //   this.$store.dispatch("addTeamMember", {type, index});
    // }
  },

  computed:{
    ...mapState(["students"])

    // students(){
    //   return this.$store.state.students;
    // }
  },

  created() {
      this.$store.dispatch("getStudents");
  }
}
</script>

