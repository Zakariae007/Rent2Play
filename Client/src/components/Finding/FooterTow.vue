<template>
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
</template>

<script>
export default {
  name: 'FooterTow'
}
</script>

<style scoped>
footer {
  background: #30494b;
}
.footer__content {
  padding-top: 2em;
}
.footer__icon {
  padding-top: .7em;
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
    padding: 2% 0 .7em 0;
  }
}

@media screen and (max-width: 740px){
  .footer__icon {
    padding-top: .7em;
    padding-bottom: .7em;
    margin-left: -6%;
    margin-top: 7px;
  } 
}
</style>