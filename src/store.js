import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import data from './data.js';

export default new Vuex.Store({
  state:{
  	students:[],
  	teamA:[],
  	teamB:[]
  },
  getters:{},
  actions:{
  	getStudents(context){
  		context.commit("setStudents");
  	},
  	addTeamMember(context, data){
  		context.commit("pushToTeam",data);
  		context.commit("enableSelected", data);
  	},
  	removeFromTeam(context, data){
  		console.log(data, "data");
  		context.commit("popFromTeam",data);
  		context.commit("disableSelected", data);
  	}
  },
  mutations:{
  	setStudents(state){
  		state.students = data.getStudents();
  	},
  	pushToTeam(state, data){
  		if(data.type === 'A'){
  			state.teamA.push(state.students[data.index]);
  		}
  		else{
  			state.teamB.push(state.students[data.index]);
		}
  	},
  	popFromTeam(state, data){
  		if(data.type === 'A'){
  			state.teamA.splice(state.students[data.index], 1);
  		}
  		else{
  			state.teamB.splice(state.students[data.index], 1);
  		}
  	},
  	enableSelected(state, data){
  		state.students[data.index].selected = true;
  	},
  	disableSelected(state, data){
  		state.students[data.index].selected = false;
  		state.students.forEach((student)=> {
  			student.id === data.t.id ? student.selected = false : "";
  		})
  	}
  }
})