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
      <v-form class="form__signup" ref="form" v-model="valid" @submit.prevent="register" lazy-validation>
        <div class="sub">
          <h1 class="form__sub">Sign up</h1>
        </div>
        <div class="input__group">
          <div class="input">
            <input type="text" v-model="firstName" placeholder="firstName" required/>
          </div>
          <div class="input">
            <input type="text" v-model="lastName" placeholder="lastName" required/>
          </div>
          <div class="input">
            <input type="text" v-model="age" placeholder="age" required/>
          </div>
          <div class="input">
            <input type="text" v-model="email" placeholder="Email" required/>
          </div>
          <div class="input">
            <input type="password" v-model="password" placeholder="Password" required/>
          </div>
        </div>
        <div class="agree">
          <div class="agree__title">
            <a href="#" class="title"> Forgotten your password ? </a>
          </div>
          <div class="form__button">
              <button class="btn">Sign up</button>
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
          <div class="gotoLogin">
            <p class="title"> Already have an account ? <router-link :to="{ name: 'log_in' }">Login</router-link></p>
          </div>
      </v-form>
    </div>

    <FooterTow />
  </section>
</template>

<script>
import FooterTow from "../components/Finding/FooterTow";

export default {
  name: "Sign_up_first",
  components: {
    FooterTow
  },
  data() {
    return{
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push({ name: 'Home' })
      })
    }
  }
};
</script>

<style scoped>
section {
  background: #233e41;
  height: 160vh;
}
.signUp {
  width: 86.041%;
  margin: auto;
  height: 140vh;
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
  padding: 10px 10.4em;
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
.nav__logo {
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
.gotoLogin {
  margin-left: -13em;
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
    padding: 10px 130px;
  }
  .agree__title {
    margin-left: -11em;
    margin-top: 0;
  }
  .space {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .space::before {
    width: 132px;
  }
  .space::after {
    width: 132px;
  }
  .gotoLogin {
    margin-left: -9em;
  }
}
</style>
