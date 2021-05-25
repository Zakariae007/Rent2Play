<template>
  <header class="nav">
    <h1 class="logo">
      RENT2PLAY
    </h1>
    <nav class="nav__list">
      <ul class="menu">
        <li class="item"><router-link :to="{ name: 'Home' }" class="link" >Players</router-link></li>
        <li class="item"><router-link :to="{ name: 'Home' }" class="link" >Owner courts</router-link></li>
        <li class="item"><router-link :to="{ name: 'Home' }" class="link" >Coatchs</router-link></li>
        <li class="item"><router-link :to="{ name: 'Home' }" class="link" >Help</router-link></li>
        <li class="item" v-if="!loggedIn"><router-link :to="{ name: 'log_in' }" class="link">log in</router-link></li>
        <li class="item" v-if="loggedIn"><router-link :to="{ name: 'user_profile' }" class="link">profile</router-link></li>        
        <li v-if="!loggedIn">
          <router-link :to="{ name: 'sign_up_first' }" >
            <v-btn rounded class="sign">Sign up</v-btn>
          </router-link>
        </li>
        <li v-else>
          <v-btn rounded class="sign" @click="logout">Log out</v-btn>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { authComputed } from '../../store/helper'

export default {
  name: 'Nav',
  computed: {
    ...authComputed
  },
  methods: {
    logout(e) {
      e.preventDefault();

      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em 1.5em; 
  max-width: 90%;
  margin: auto;
}
.menu .link{
  text-decoration: none;
  color: #FFFFFF;
  font-size: 1em;
  font-weight: bold;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
}
.nav__list{
  display: flex;
}
.menu{
  list-style: none;
  display: flex;
  justify-content: end;
  align-items: center;
}
.nav__btn{
  display: flex;
  justify-content: end;
  align-items: center;
}
.logo{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.2em;
  color: #FFFFFF;
  width: 10%;
}
.sign{
  color: black;
  font-weight: bold;
}
</style>