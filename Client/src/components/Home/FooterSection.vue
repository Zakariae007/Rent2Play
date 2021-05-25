<template>
  <section class="footer">
    <footer>
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
      <hr>
      <div class="footer__icon">
        <ul class="footer__list d-flex">
          <li><i class='bx bxl-facebook-circle'></i></li>
          <li><i class='bx bxl-instagram-alt' ></i></li>
          <li><i class='bx bxl-twitter' ></i></li>
        </ul>
      </div>
    </footer>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
  background: #30494B;
}
.footer__content{
  padding-top: 2em;
}
.footer__icon{
  padding-top: 1em;
  margin-left: -7%;
  margin-top: 7px;
}
.footer__contentList{
  margin-bottom: 10%;
}
.footer__item{
  font-weight: lighter;
}
.footer__listItem{
  margin-left: -6.5%;
}
.bx{
  font-size: 2em;
  margin-right: 10px;
}
footer{
  padding: 6.5%;
}
h1{
  margin-bottom: 2%;
  font-size: 1.2em;
  font-weight: normal;
  color: #ffffff;
}
ul{
  list-style: none;
}
li{
  color: #ffffff;
}
@media screen and (min-width: 600px){
  .footer__content{
    display: flex;
  }
  .footer__contentList{
    margin-left: 7%;
    margin-bottom: 4%;
  }
  footer{
    padding: 4% 6.5%;
  }
  hr{
    width: 90%;
    margin-left: 5%;
  }
  .footer__icon{
    margin-left: 2.5%;
  }
}
</style>