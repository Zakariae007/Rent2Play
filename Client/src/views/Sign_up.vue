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

        <router-link :to="{ name: 'sign_up' }">
          <v-btn rounded> Sign up </v-btn>
        </router-link>
      </div>
    </nav>

    <div class="signUp">
      <v-form class="form__signup" ref="form" v-model="valid" lazy-validation>
        <div class="sub">
          <h1 class="form__sub">Finish Signing Up</h1>
        </div>
        <div class="input__group">
          <div class="input">
            <input type="text" placeholder="First Name" />
          </div>
          <div class="input">
            <input type="text" placeholder="Last Name" />
          </div>
          <div class="input">
            <input type="text" placeholder="Date of the birth" />
          </div>
        </div>
        <div class="agree">
          <div class="agree__title">
            <p class="title">
              By Select <span class="active">Agree And continue</span> below, I
              agree to Rent2play's
            </p>
            <a href="#" class="link">Terms of Service</a>
            <a href="#" class="link">Payment Terms of services</a>
            <a href="#" class="link">Privacy Police</a>
          </div>
          <div class="form__button">
            <button class="btn">Agree and Continue</button>
          </div>
        </div>
      </v-form>
    </div>

    <footer>
      <div class="footer">
        <div class="footer__content">
          <div class="footer__contentList">
            <ul class="footer__listItem">
              <li><h1>ABOUT</h1></li>
              <li class="footer__item">Made possible by Hosts</li>
              <li class="footer__item">How RENT2PLY works</li>
              <li class="footer__item">Founders' Letter</li>
              <li class="footer__item">HotelTonight</li>
              <li class="footer__item">Careers</li>
            </ul>
          </div>
          <div class="footer__contentList">
            <ul class="footer__listItem">
              <li><h1>COMMUNITY</h1></li>
              <li class="footer__item">Diversity & Belonging</li>
              <li class="footer__item">Guest Referrals</li>
              <li class="footer__item">Frontline Stays</li>
              <li class="footer__item">Accessibility</li>
            </ul>
          </div>
          <div class="footer__contentList">
            <ul class="footer__listItem">
              <li><h1>HOST</h1></li>
              <li class="footer__item">Host an Online Experience</li>
              <li class="footer__item">Responsible hosting</li>
              <li class="footer__item">Host an Experience</li>
              <li class="footer__item">Community Centre</li>
              <li class="footer__item">Resource Centre</li>
              <li class="footer__item">Host your home</li>
            </ul>
          </div>
          <div class="footer__contentList">
            <ul class="footer__listItem">
              <li><h1>SUPPORT</h1></li>
              <li class="footer__item">Our COVID-19 Response</li>
              <li class="footer__item">Neighbourhood Support</li>
              <li class="footer__item">Cancellation options</li>
              <li class="footer__item">Trust & Safety</li>
              <li class="footer__item">Help Centre</li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="footer__icon">
          <ul class="footer__list d-flex">
            <li><i class="bx bxl-facebook-circle"></i></li>
            <li><i class="bx bxl-instagram-alt"></i></li>
            <li><i class="bx bxl-twitter"></i></li>
          </ul>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Sign_up",
  components: {}
};
</script>

<style scoped>
footer {
  background: #30494b;
}
section {
  background: #233e41;
  height: 150vh;
}
.signUp {
  width: 86.041%;
  margin: auto;
  height: 100vh;
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
input[type="text"] {
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
  padding-bottom: 10px;
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
  margin-left: -5.5em;
}
.title {
  color: #ffffff;
  padding-left: 5px;
  letter-spacing: 1px !important;
  font-weight: lighter;
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
  margin-top: 10px;
  color: #ffffff;
  background: rgb(180, 180, 100);
  padding: 10px 8.4em;
  border-radius: 10px;
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

.footer__content {
  padding-top: 2em;
}
.footer__icon {
  padding-top: 1em;
  margin-left: -3%;
  margin-top: 7px;
}
.footer__contentList {
  margin-bottom: 10%;
}
.footer__item {
  font-weight: lighter;
}
.footer__listItem {
  margin-left: -6.5%;
}
.bx {
  font-size: 2em;
  margin-right: 10px;
}
.footer{
   width: 86.041%;
  margin: auto;
}
h1 {
  margin-bottom: 2%;
  font-size: 1.2em;
  font-weight: normal;
  color: #ffffff;
}
ul {
  list-style: none;
}
li {
  color: #ffffff;
}
@media screen and (min-width: 600px) {
  .footer__content {
    display: flex;
    justify-content: space-between;
  }
  .footer__contentList {
    margin-bottom: 4%;
  }
  footer {
    padding: 4% 0;
  }
}
</style>
