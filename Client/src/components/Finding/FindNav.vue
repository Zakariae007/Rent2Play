<template>
  <nav class="navBar">
    <div class="nav__logo">
      <router-link :to="{ name: 'Home' }">
        <h1 class="logo">
          RENT2PLAY
        </h1>
      </router-link>
    </div>

    <div class="nav__search" v-if="navShow">
      <form action="" class="nav__form">
        <div class="select__form">
          <div class="nav__select">            
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">Location</option>
                <option value="#">One</option>
                <option value="#">Two</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <!-- SVG Sprites-->
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
          <div class="nav__select">            
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">Date</option>
                <option value="#">One</option>
                <option value="#">Two</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <!-- SVG Sprites-->
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
          <div class="nav__select">            
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">Time</option>
                <option value="#">One</option>
                <option value="#">Two</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <!-- SVG Sprites-->
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
          <div class="nav__select">            
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">Sport</option>
                <option value="#">One</option>
                <option value="#">Two</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <!-- SVG Sprites-->
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
        </div>

        <div class="search__icon">
          <i class='bx bx-search'></i>
        </div>
      </form>
    </div>
    
    <div class="nav__user">
      <router-link :to="{ name: 'log_in' }">      
        <h1 class="user__login">
          Login
        </h1>
      </router-link>

      <router-link :to="{ name: 'sign_up' }">
        <v-btn rounded>
          Sign up
        </v-btn>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FindNav',
  props: {
    navShow: Boolean,
  }
}
</script>

<style scoped>
.navBar{
  width: 86.041%;
  margin: auto;
  padding: calc(43.75px - 25px) 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid gray;
}
.nav__logo{

}
.logo{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 49px;

  color: #FFFFFF;
}

.nav__search{
  width: 39.531%;
}
.nav__form{
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  height: 55px;
  border-radius: 50px;

  box-shadow: -2px 5px 7px rgb(0 0 0 / 50%);
  background: #FFFFFF;

}

/* Nav select */
.select__form{
  display: flex;
  justify-content: center;
  align-items: center;
}
.select {
  position: relative;
}
.nav__select{
  padding-right: 10px;
  border-right: 1px solid black;
}
.nav__select:last-child{
  border: none;
}
.select svg {
  position: absolute;
  right: 5px;
  top: calc(50% - 3px);
  width: 10px;
  height: 6px;
  stroke-width: 2px;
  stroke: black;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}
.select select {
  -webkit-appearance: none;
  padding: 5px 20px 5px 10px;
  width: 100%;
  background: #ffffff;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 15px;
  transition: all 150ms ease;
}
.select select:required:invalid {
  color: #272727;
}
.select select option {
  color: #272727;
}
.select select option[value=""][disabled] {
  display: none;
}
.select select:focus {
  outline: none;
  border-color: #272727;
  box-shadow: 0 0 0 2px rgba(0,0,0,0.2);
}
.select select:hover + svg {
  stroke: #272727;
}
.sprites {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}

/* nav search icon */
.search__icon{
  display: flex;
  align-items: center;  
  justify-content: center;
  
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 100%;

  background: #233E41;
}
.bx{
  color: #FFFFFF;

}


.nav__user{
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 15%;
}
.user__login{
  color: #FFFFFF;
}
</style>