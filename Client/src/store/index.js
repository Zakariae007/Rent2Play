import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    court_information: {}
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA(state) {
      state.user = null;
      localStorage.removeItem('user');
      axios.defaults.headers.common['Authorization'] = null;
    },
    SEND_COURT_INFO(state, findingCourt) {
      state.court_information = findingCourt;
    },
    GET_COURT(state, res){
      state.court_information = res;
    }
  },
  actions: {
    async register({ commit }, credent) {
      return await axios
      .post('http://localhost:4000/api/register', credent)
      .then( ({data}) => {
        // console.log('data is :', data)
        commit('SET_USER_DATA', data)
      })
    },
    async login({ commit }, credent) {
      return await axios
      .post('http://localhost:4000/api/login', credent)
      .then(({data}) => {
        // console.log('data is :', data)
        commit('SET_USER_DATA', data)
      })
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA')
    },

    async findCourt({ commit } , bookingInformation ){
      return await axios
      .get('http://localhost:4000/api/courts/city/:city/sport/:sport/bookingStartTime/:bookingStartTime/bookingEndTime/:bookingEndTime', bookingInformation)
      .then(({data}) => {
        commit('', data)
      })
    },

    // sendCourtInfo({ commit }, court_information) {
    //   return axios
    //   .get(`http://localhost:4000/api/courts/city/${court_information.selectLocation}/sport/${court_information.sport}/bookingStartTime/${court_information.startTime}/bookingEndTime/${court_information.endTime}`)
    //   // localhost:4000/api/courts/city/Alytus/sport/Tennis/bookingStartTime/2021-05-09T08:00:00.000Z/bookingEndTime/2021-05-09T23:00:00.000Z
    //   .then((findingCourt) => {
    //     commit('SEND_COURT_INFO', findingCourt);
    //   })
    // },
    getCourts({commit}){
      return axios 
      .get('http://localhost:4000/api/courts')
      .then((res)=>{
        commit('GET_COURT', res);
      })
    }

  }  
});
