<template>
  <section>
    <nav class="navBar">
      <div class="nav__logo">
        <router-link :to="{ name: 'Home' }">
          <h1 class="logo">RENT2PLAY</h1>
        </router-link>
      </div>

      <div class="nav__user">
        <router-link :to="{ name: 'log_in' }">
          <h1 class="user__login">Login</h1>
        </router-link>

        <router-link :to="{ name: 'sign_up_first' }">
          <v-btn rounded> Sign up </v-btn>
        </router-link>
      </div>
    </nav>

    <div class="signUp">
      <v-form class="form__signup" ref="form" @submit.prevent="login" v-model="valid" lazy-validation>
        <div class="sub">
          <h1 class="form__sub">Login</h1>
        </div>
        <div class="input__group">
          <div class="input">
            <input type="text" v-model="username" placeholder="Email" />
          </div>
          <div class="input">
            <input type="password" v-model="password" placeholder="Password" />
          </div>
          <p>{{ error }}</p>
        </div>
        <div class="agree">
          <div class="form__button">
            <button class="btn">Login</button>
          </div>
          <div class="agree__title">
            <a href="#" class="title"> Forgotten your password ? </a>
          </div>
        </div>
        <div class="space">
          <p class="space__title">Or</p>
        </div>
        <div class="form__button icon">
          <img src="../assets/facebook.png" width="30" height="30" />
          <button class="btn_icon">
             Continue with facebook
          </button>
        </div>
        <div class="form__button icon">
          <img src="../assets/google.png" width="30" height="30" /> 
          <button class="btn_icon">
            Continue with google
          </button>
        </div>
      </v-form>
    </div>

    <FooterTow />
  </section>
</template>

<script>
import FooterTow from "../components/Finding/FooterTow";

export default {
  name: "Login",
  components: {
    FooterTow
  },
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      if(!this.username) {
        this.$toasted.show("Please enter your email or phone number", {
          duration: 2000,
          icon: "exclamation-circle"
        });
      } else if(!this.password){
        this.$toasted.show("Please enter your password", {
          duration: 2000,
          icon: "exclamation-circle"
        });
      } else{
        this.$store.dispatch('login', {
         username: this.username,
         password: this.password
       })
       .then(() => {
        this.$router.push({ name: 'Home' })
        })
       .catch(err => {
        this.error = err.response.data.error
        })
      }
    //   this.$store.dispatch('login', {
    //     email: this.email,
    //     password: this.password
    //   })
    //   .then(() => {
    //     this.$router.push({ name: 'Home' })
    //   })
    //   .catch(err => {
    //     this.error = err.response.data.error
    //   })
    // }
  }
  }
}
</script>

<style scoped>
section {
  background: #233e41;
  height: 150vh;
}
.signUp {
  width: 86.041%;
  margin: auto;
  height: 115vh;
  padding-bottom: 6em;

  display: flex;
  justify-content: center;
  align-items: center;
}
.form__signup {
  margin-top: 100px;
  width: 500.5px;
  padding: 20px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  border: 1px solid #f5f5f5;
  background: #30494b;
  box-shadow: -2px 5px 7px rgb(0 0 0 / 50%);
}
.input__group {
  padding-top: 20px;
}
.input {
  padding: 10px 0;
}
input {
  background: #efefef;
  padding: 10px 200px 10px 25px;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
}
.sub {
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
}
.form__sub {
  color: #efefef;
  font-weight: lighter;
}
.agree {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.agree__title {
  margin-left: -15.5em;
}
.title {
  color: #ffffff;
  letter-spacing: 1px !important;
  margin-bottom: -7px !important;
  font-size: 10px !important;
}
.active {
  font-weight: bold;
}
.link {
  font-size: 10px !important;
  margin-left: 5px;
  margin-top: -20px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  color: #ffffff;
  background: rgb(180, 180, 100);
  padding: 10px 11.5em;
  border-radius: 10px;
}
.icon{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  background: #f5f5f5;
  width: 80%;
  color: rgb(0, 0, 0, 0.9);
  padding: 10px; 
}
.btn_icon{
  width: 100%;
  height: 100%;
  margin-left: -30px;
}
.navBar {
  width: 86.041%;
  margin: auto;
  padding: calc(43.75px - 25px) 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid gray;
}

.logo {
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 49px;

  color: #ffffff;
}
.nav__user {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 15%;
}
.user__login {
  color: #ffffff;
}

.space {
  position: relative;
  margin-top: 10px;
  color: #ffffff;
}
.space::before {
  content: "";
  position: absolute;
  height: 1px;
  width: 170px;
  top: 12px;
  left: 40px;
  background: #ffffff;
}
.space::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 170px;
  top: 12px;
  right: 40px;
  background: #ffffff;
}


@media screen and (max-width: 740px){
  .logo {
    font-size: 22px;
  }
  .nav__user {
    width: 38%;
  }
  input {
    padding: 10px 125px 10px 25px;
  }
  .btn {
    padding: 10px 146px;
  }
  .agree__title {
    margin-left: -11em;
    margin-top: 10px;
  }
  .space::before {
    width: 132px;
  }
  .space::after {
    width: 132px;
  }

}
</style>
