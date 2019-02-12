<style>
  .lds-circle {
    position: absolute;
    z-index: 1;
    display: inline-block;
    transform: translateZ(1px);
    top:20%;
    left:47.8%;
    transition: all 1s ease;
}
.lds-circle > div {
  display: inline-block;
  width: 51px;
  height: 51px;
  margin: 6px;
  border-radius: 50% !important;
  background: #2ab4c05c;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>
<template>
  <div>
    <!-- <h1>Pokemon</h1> -->
    <div class="lds-circle" :style="show == 0 ? 'visibility:hidden;opacity:0' : 'visibility:visible;opacity:1'"><div></div></div>
    <button @click="fetchapi()">Fetch</button>
    <div class="hello">Hello</div>
    <input type="text" v-model="search" placeholder="Search title.."/>
    <ul id="example-2">
      <li v-for="p in filteredList">
        {{ p.name }}
        <img :src="p.sprites.front_default" alt="">
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  
  data() {
    return {
      search:'',
      pokemon : [],
      show : 0,
    }
  },

  methods:{
    fetchapi(){
      let self = this
      this.show = 1;
      var arr = [];
      for(let i=1;i<650;i++){
        axios.get("https://pokeapi.co/api/v2/pokemon/"+i)
        .then((response)  =>  {
          arr.push(response.data);
          console.log(arr);
          self.pokemon = arr;
          this.show = 0;
        }, (error)  =>  {
        })
      }
    },
  },

  computed: {
    filteredList() {
      return this.pokemon.filter(p => {
        return p.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },

  created() {
    // this.fetchapi();
  },
  mounted() {
    // this.fetchapi();
  }
}
</script>

