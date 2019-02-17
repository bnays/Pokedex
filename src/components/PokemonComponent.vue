<style>
  .lds-circle {
    position: absolute;
    z-index: 10000;
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
  background: #337ab7ac;
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
      </ul>
      <div class="made_with">Made with&nbsp;<i class="fa fa-coffee"></i>&nbsp;By bnays</div>
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
                  <span><a href="javascript:;"><i class="fab fa-instagram"></i></a></span>
                </li>
                <li class="social-icon social-icon__facebook">
                  <span><a href="javascript:;"><i class="fab fa-facebook-f"></i></a></span>
                </li>
                <li class="social-icon social-icon__youtube">
                  <span><a href="javascript:;"><i class="fab fa-youtube"></i></a></span>
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
                    <!-- <div class='search-input'> -->
                      <!-- <input class='input-search' v-model="search" :placeholder='placeholder' type='text'> -->
                      <div class="group">
                        <input type="text" v-model="search">
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label for="name">{{search_label}}</label>
                      </div>
                    <!-- </div> -->
                    <div class="dropdown" style="float:right;display:inline-block;transform: translate( -95px, -45px);">
                      <button class="btn dropdown-toggle cust_button" type="button" data-toggle="dropdown">Filter
                      <span class="caret"></span></button>
                      <ul class="dropdown-menu">
                        <li><a href="#" @click="search_filter(1)">Name</a></li>
                        <li><a href="#" @click="search_filter(2)">Gender</a></li>
                        <li><a href="#" @click="search_filter(3)">Color</a></li>
                        <li><a href="#" @click="search_filter(4)">Habitat</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="pokemon_container">
                  <div class="card" v-for="(p, i) in filteredList">
                    <div class="products" data-toggle="modal" data-target="#myModal" @click="fetchData(p.id)">
                      <div class="product">
                        <img :src="p.sprites" alt="">
                      </div>
                      <h1 class="title">{{ p.name }}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>  

            <!-- Modal -->
            <div id="myModal" class="modal fade" role="dialog">
              <div class="modal-dialog" style="width: 70vw;" v-if="pokemon_data.length != 0">

                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <p class="modal-title text-uppercase bold">{{pokemon_data.name}}</p>
                  </div>
                  <div class="modal-body">
                    <div id="overlay2"></div>
                    <div class="pokemon_modal">
                      <div class="image">
                          <img :src="pokemon_data.sprites.front_default" alt="">
                          <p class="bold">#{{pokemon_data.id}}</p>
                      </div>
                      <div class="text-center" style="margin-bottom:40px;">
                        <span v-for="t in pokemon_data.types" class="types">{{t.type.name}}</span>
                      </div>
                      <p class="text-center">{{pokemon_species.flavor_text_entries[1].flavor_text}}</p>
                      <div class="text-center">
                        <ul class="nav nav-tabs custom_nav_tab">
                          <li style="width:33.33%"><a href=""></a></li>
                          <li class="active" style="width:33.33%">
                            <a data-toggle="tab" href="#">Habitat</a>
                          </li>
                        </ul>
                        <p class="text-capitalize bold">{{pokemon_species.habitat.name}}</p>
                      </div>
                      <div>
                        <ul class="nav nav-tabs custom_nav_tab">
                          <li style="width:33.33%"><a href=""></a></li>
                          <li class="active" style="width:33.33%">
                            <a data-toggle="tab" href="#">Stats</a>
                          </li>
                        </ul>
                        <div class="row">
                          <div class="col-md-3">
                            
                          </div>
                          <div class="col-md-6">
                            <table width="100%" style="margin-left: 15%;">
                              <tbody>
                                <tr v-for="stats in pokemon_data.stats">
                                  <td width="40%">{{stats.stat.name}}</td>
                                  <td width="15%">:</td>
                                  <td width="45%">{{stats.base_stat}}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="col-md-3">
                            
                          </div>
                        </div>
                      </div>
                      <div>
                        <ul class="nav nav-tabs custom_nav_tab">
                          <li style="width:33.33%"><a href=""></a></li>
                          <li class="active" style="width:33.33%">
                            <a data-toggle="tab" href="#">Profile</a>
                          </li>
                        </ul>
                        <div class="row">
                          <div class="col-md-3">
                            
                          </div>
                          <div class="col-md-6">
                            <table width="100%" style="margin-left: 15%;">
                              <tbody>
                                <tr>
                                  <td width="40%">Height</td>
                                  <td width="15%">:</td>
                                  <td width="45%">{{pokemon_data.height}} ft</td>
                                </tr>
                                <tr>
                                  <td width="40%">Weight</td>
                                  <td width="15%">:</td>
                                  <td width="45%">{{pokemon_data.weight}} kg</td>
                                </tr>
                                <tr>
                                  <td width="40%">Order</td>
                                  <td width="15%">:</td>
                                  <td width="45%">{{pokemon_data.order}}</td>
                                </tr>
                                <tr>
                                  <td width="40%">Base Experience</td>
                                  <td width="15%">:</td>
                                  <td width="45%">{{pokemon_data.base_experience}}</td>
                                </tr>
                                <tr>
                                  <td width="40%">Egg Group</td>
                                  <td width="15%">:</td>
                                  <td width="45%"><span v-for="eg in pokemon_species.egg_groups">{{eg.name}}</span></td>
                                </tr>
                                <tr>
                                  <td width="40%">Abilities</td>
                                  <td width="15%">:</td>
                                  <td width="45%"><span v-for="ab in pokemon_data.abilities">{{ab.ability.name}}</span></td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="col-md-3">
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      <ul class="nav nav-tabs custom_nav_tab">
                        <li style="width:33.33%"><a href=""></a></li>
                        <li class="active" style="width:33.33%">
                          <a data-toggle="tab" href="#">Moves</a>
                        </li>
                      </ul>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="moves_section">
                            <ul>
                                <li v-for="m in pokemon_data.moves" @click="fetchMoves(m.move.name)" :class="m.move.name">
                                  <a href="javascript:;" >{{m.move.name}}
                                  </a>    
                                </li>
                              </ul>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="moves_data">
                            <div class="lds-circle" :style="moves_show == 0 ? 'visibility:hidden;opacity:0' : 'visibility:visible;opacity:1'"><div></div></div>
                              <div v-if="moves.length != 0">
                                <h1>{{moves.name}}</h1>
                                <div class="move_content">
                                  <div class="row">
                                    <div class="col-md-12">
                                      <table width="100%">
                                        <tbody>
                                          <tr>
                                            <td width="30%">Power</td>
                                            <td width="10%">:</td>
                                            <td width="60%"><span v-if="moves.power != null">{{moves.power}}</span><span v-else>-</span></td>
                                          </tr>
                                          <tr>
                                            <td width="30%">PP</td>
                                            <td width="10%">:</td>
                                            <td width="60%"><span v-if="moves.pp != null">{{moves.pp}}</span></td>
                                          </tr>
                                          <tr>
                                            <td width="30%">Accuracy</td>
                                            <td width="10%">:</td>
                                            <td width="60%"><span v-if="moves.accuracy != null">{{moves.accuracy}}</span><span v-else>-</span></td>
                                          </tr>
                                          <tr>
                                            <td width="30%">Type</td>
                                            <td width="10%">:</td>
                                            <td width="60%"><span v-if="moves.type.name != null">{{moves.type.name}}</span><span v-else>-</span></td>
                                          </tr>
                                          <tr>
                                            <td width="30%" style="vertical-align:top">Description</td>
                                            <td width="10%" style="vertical-align:top">:</td>
                                            <td width="60%"><span v-for="move_des in moves.effect_entries">{{move_des.effect}}</span></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                      
                                    </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    </div>
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
      moves_show: 0,
      search_label:'Hello',
      search_filter_by:1,
      moves: [],
      habitat: [],
      poke_data:[],
      pokemon_species:[],
    }
  },

  methods:{
    fetchapi(){
      let self = this
      this.show = 1;
      var arr = [];
      var arr1 = [];
      for(let i=1;i<200;i++){
        axios.get("https://pokeapi.co/api/v2/pokemon/"+i+"/")
        .then((response)  =>  {
          axios.get("http://pokeapi.co/api/v2/pokemon-species/"+i)
          .then((response2)  =>  {
            arr.push({id:response.data.id, name:response.data.name, sprites:response.data.sprites.front_default, habitat: response2.data.habitat.name, color:response2.data.color.name});
            self.pokemon = arr;
          }, (error)  =>  {
          });
        }, (error)  =>  {
        });
        this.show = 0;
      }
    },
    fetchapitest(){
      let self = this
      this.show = 1;
      var arr = [];
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20")
        .then((response)  =>  {
          arr.push(response.data);
          // console.log(arr);
          self.pokemon = arr[0].results;
          this.show = 0;
        }, (error)  =>  {
        })
    },
    fetchData(id){
      let self = this
      this.show = 1;
      self.pokemon_data = [];
      var arr = [];
      var arr1 = [];
      axios.get("http://pokeapi.co/api/v2/pokemon/"+id)
      .then((response)  =>  {
        arr.push(response.data);
        self.pokemon_data = arr[0];
        this.show = 0;
        setTimeout(() => $( ".moves_section ul li" ).first().trigger( "click" ), 100);
        
        // self.fetchHabitat();
        // console.log(self.pokemon_data.moves[0].move.name, "moves");
      }, (error)  =>  {
      });
      axios.get("http://pokeapi.co/api/v2/pokemon-species/"+id)
      .then((response)  =>  {
        arr1.push(response.data);
        self.pokemon_species = arr1[0];
        this.show = 0;
      }, (error)  =>  {
      });
    },
    fetchMoves(name){
      let self = this;
      this.moves.length = 0;
      this.moves_show = 1;
      $('.moves_section ul li').removeClass('active');
      $('.'+name).addClass('active');
      axios.get("http://pokeapi.co/api/v2/move/"+name)
        .then((response)  =>  {
          // console.log(response.data, "response");
          self.moves = response.data;
          this.moves_show = 0;
      });
    },
    fetchHabitat(){
      let self=this
      for(let i=1;i<9;i++){
        axios.get("http://pokeapi.salestock.net/api/v2/pokemon-habitat/"+i)
          .then((response)  =>  {
          var evoChain = [];
          var evoData = response.data;
          self.habitat.push(evoData);
          console.log(evoData, "evoData");
      });
      }
      setTimeout(function(){
        $.each(self.habitat, function(element, value){
          console.log(element, "value habitat");
        });

      }, 500);
    },
    search_filter(id){
      if(id == 1){
        this.search_label = "Search by Name...";
        this.search_filter_by = 1;
      }
      if(id == 2){
        this.search_label = "Search by Gender...";
        this.search_filter_by = 2;
      }
      if(id == 3){
        this.search_label = "Search by Color...";
        this.search_filter_by = 3;
      }
      if(id == 4){
        this.search_label = "Search by Habitat..."
        this.search_filter_by = 4;
      }
    }
  },

  computed: {
    filteredList() {
      return this.pokemon.filter(p => {
        if(this.search_filter_by == 1){
          return p.name.toLowerCase().indexOf(this.search.toLowerCase()) === 0;
        }
        if(this.search_filter_by == 2){
          return p.name.toLowerCase().indexOf(this.search.toLowerCase()) === 0;
        }
        if(this.search_filter_by == 3){
          return p.color.toLowerCase().indexOf(this.search.toLowerCase()) === 0;
        }
        if(this.search_filter_by == 4){
          return p.habitat.toLowerCase().indexOf(this.search.toLowerCase()) === 0;
        }
      })
    }
  },

  created() {
  },
  mounted() {
    this.fetchapi();
    // this.fetchapitest();
    this.search_filter(1);
  }
}
</script>

