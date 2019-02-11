<template>
  <div>
    <h1>Pokemon</h1>
    <button @click="fetchapi()">Fetch</button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  
  data() {
    return {
    }
  },

  methods:{
    fetchapi(){
      let self = this
      for(var i=1;i<650;i++){
        axios.get("https://pokeapi.co/api/v2/pokemon/"+i)
        .then((response)  =>  {
          console.log(response, "response");
        }, (error)  =>  {
        })
      }
    },
  },

  computed:{
  },

  created() {
    // this.fetchapi();
  }
}
</script>

