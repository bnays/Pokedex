<style>
  .lds-circle {
    position: absolute;
    z-index: 1;
    display: inline-block;
    transform: translateZ(1px);
    top:40%;
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
    <!-- <button>Fetch</button>
    <div class="hello">Hello</div>
    <input type="text" v-model="search" placeholder="Search title.."/> -->
    <div class="menu-slider">
      <div class="close-menu">
        <span><i class="fas fa-chevron-left"></i></span>
      </div>
      <ul class="nav">
        <li class="nav-li">
          <a href="#">Home</a>
        </li>
        <li class="nav-li">
          <a href="#">About</a>
        </li>
        <li class="nav-li">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div class="made_with">Made with Love By bnays</div>
    </div>
    <div class="landing_page_container">
      <div class="wrapper">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1093 1080">
          <defs>
            <style>
              .cls-1 {
                clip-path: url(#clip-Web_1920_1);
              }

              .cls-2 {
                fill: #fff;
                font-size: 961px;
                font-family: XtreemFatPERSONALUSE, Xtreem Fat PERSONAL USE;
              }
            </style>
            <clipPath id="clip-Web_1920_1">
              <rect width="1093" height="1080"/>
            </clipPath>
          </defs>
          <g id="Web_1920_1" data-name="Web 1920 – 1" class="cls-1">
            <text id="bnays" class="cls-2" transform="translate(49 507)"><tspan x="0" y="0">bnays</tspan></text>
          </g>
        </svg> -->
      </div>
      <div id="overlay"></div>
      <div class="container">
        <div class="content_wrapper">
          <header>
            <div class="row ">
              <div class="col-md-2">
                <div class="menu-icon header__item">
                  <span class="menu-icon__line"></span>
                </div>
              </div>
              <div class="col-md-8">
                <h1 class="heading header__item">POKEDEX</h1>
              </div>
              <div class="col-md-2">
              </div>
              <ul class="social-container header__item">
                <li class="social-icon social-icon__instagram">
                  <span><a href="instagram.com/b_nays/"><i class="fab fa-instagram"></i></a></span>
                </li>
                <li class="social-icon social-icon__facebook">
                  <span><a href="facebook.com/binaymhj"><i class="fab fa-facebook-f"></i></a></span>
                </li>
                <li class="social-icon social-icon__youtube">
                  <span><a href="youtube.com/bnaysm"><i class="fab fa-youtube"></i></a></span>
                </li>
              </ul>
            </div>
          </header>

        </div>
      </div>
      <div class="container-fluid">
          <div class="body-section">
            <div class="row">
              <!-- <div class="col-md-2">
                <p class="left_center_text"> F 23 F 16 N 12 D D | D D 21 N 61 F 32 F </p>
              </div> -->
              <div class="col-md-12">
                <!-- <input type="text" v-model="search" placeholder="Search title.."/> -->
                <div class="row">
                  <div class="col-md-12">
                    <div class='search-input'>
                      <input class='input-search' v-model="search" :placeholder='placeholder' type='text'>
                    </div>
                    <div class="dropdown" style="float:right;display:inline-block;transform: translate( -95px, -45px);">
                      <button class="btn dropdown-toggle cust_button" type="button" data-toggle="dropdown">Filter
                      <span class="caret"></span></button>
                      <ul class="dropdown-menu">
                        <li><a href="#" @click="search_filter(1)">Name</a></li>
                        <li><a href="#" @click="search_filter(2)">Gender</a></li>
                        <li><a href="#" @click="search_filter(3)">Region</a></li>
                        <li><a href="#" @click="search_filter(4)">Habitat</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="pokemon_container">
                  <div class="card" v-for="p in filteredList">
                    <div class="products" @click="fetchData(p.id)">
                      <div class="product active">
                        <img :src="p.sprites" alt="">
                        <h1 class="title">{{ p.name }}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
      </div>
    </div>
    <!-- <ul id="example-2">
      <li v-for="p in filteredList">
        {{ p.name }}
        <img alt="">
      </li>
    </ul> -->
  </div>
</template>

<script>

import axios from 'axios';

export default {
  
  data() {
    return {
      search:'',
      pokemon : [],
      pokemon_data : [],
      pokemon_evolution_chain : [],
      show : 0,
      placeholder:'Hello',
      search_filter_by:1
    }
  },

  methods:{
    fetchapi(){
      let self = this
      this.show = 1;
      var arr = [];
      var arr1 = [];
      for(let i=1;i<5;i++){
        axios.get("https://pokeapi.co/api/v2/pokemon/"+i)
        .then((response)  =>  {
          arr.push({id:response.data.id, name:response.data.name, sprites:response.data.sprites.front_default});
          self.pokemon = arr;
          // axios.get("https://pokeapi.co/api/v2/gender/"+i)
          // .then((response)  =>  {
          //   arr[i] = ({gender:response.data.name});
          //   // console.log(arr);
          //   self.pokemon_evolution_chain = arr1;
          // }, (error)  =>  {
          // })
        }, (error)  =>  {
        })
        this.show = 0;
      }
    },
    fetchapitest(){
      let self = this
      this.show = 1;
      var arr = [];
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=650")
        .then((response)  =>  {
          arr.push(response.data);
          console.log(arr);
          this.show = 0;
        }, (error)  =>  {
        })
    },
    fetchData(id){
      let self = this
      this.show = 1;
      var arr = [];
      axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
      .then((response)  =>  {
        arr.push(response.data);
        // console.log(arr);
        self.pokemon_data = arr;
        this.show = 0;
      }, (error)  =>  {
      })
    },
    search_filter(id){
      if(id == 1){
        this.placeholder = "Search by Name...";
        this.search_filter_by = 1;
        // $('.cust_button').text('Name');
      }
      if(id == 2){
        this.placeholder = "Search by Gender...";
        this.search_filter_by = 2;
      }
      if(id == 3){
        this.placeholder = "Search by Region...";
        this.search_filter_by = 3;
      }
      if(id == 4){
        this.placeholder = "Search by Habitat..."
        this.search_filter_by = 4;
      }
    }
  },

  computed: {
    filteredList() {
      return this.pokemon.filter(p => {
        if(this.search_filter_by == 1){
          return p.name.toLowerCase().includes(this.search.toLowerCase())
        }
        if(this.search_filter_by == 2){
          return p.name.toLowerCase().includes(this.search.toLowerCase())
        }
        if(this.search_filter_by == 3){
          return p.name.toLowerCase().includes(this.search.toLowerCase())
        }
        if(this.search_filter_by == 4){
          return p.name.toLowerCase().includes(this.search.toLowerCase())
        }
      })
    }
  },

  created() {
    // this.fetchapi();
  },
  mounted() {
    this.fetchapi();
    this.fetchapitest();
    this.search_filter(1);
  }
}
</script>

