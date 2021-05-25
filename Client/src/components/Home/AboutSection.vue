<template>
  <section class="about">
    <div class="topLocation d-md-none d-lg-none d-xl-none d-sm-none">
      <h1 class="sub">Top location</h1>
      <div class="location__content">
        <v-carousel 
          height="200"
          width="150"
          :show-arrows="false"
          cycle
          hide-delimiters>
          <v-carousel-item v-for="card in cards" :key="card.id">
            <v-card
              :loading="loading"
              class="mx-auto"
              max-width="200"
              max-height="200">
              <v-img height="90" :src="card.img"></v-img>
              <v-card-title>{{card.location}}</v-card-title>
              <v-card-subtitle>
                {{card.time}}
              </v-card-subtitle>
            </v-card>    
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    
    <div class="d-none">
      <h1 class="sub">Top location</h1>
      <div class="location__content">
        <v-card
          v-for="card in cards" :key="card.id"
          :loading="loading"
          class="card"
          max-width="200"
          max-height="200">
          <v-img height="90" :src="card.img"></v-img>
          <v-card-title>{{card.location}}</v-card-title>
          <v-card-subtitle>
            {{card.time}}
          </v-card-subtitle>
        </v-card>    
      </div>
    </div>

    <!-- small screen -->
    <div class="services d-md-none d-lg-none d-xl-none">
      <h1 class="sub">Type of services</h1>
      <div class="services__content">
        <v-carousel 
          height="360"
          width="100%"
          :show-arrows="false"
          cycle
          hide-delimiters>
          <v-carousel-item v-for="service in services" :key="service.id">
            <v-card
              :loading="loading"
              class="mx-auto"
              max-width="100%"
              height="360">
              <v-img height="300" :src="service.img"></v-img>
              <v-card-title>{{service.type}}</v-card-title>
            </v-card>    
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <div class="services lg-services">
      <h1 class="sub">Type of services</h1>
      <div id="portfolio">
            <div class="project">
              <img class="project__image" src="../../assets/Rectangle 10.jpg" />
              <p>services</p>
              <h3 class="grid__title">services</h3>
              <div class="grid__overlay">
                <button class="viewbutton">view more</button>
              </div>
            </div> 
            <div class="project">
              <img class="project__image" src="../../assets/Rectangle 10.jpg" />
              <p>services</p>
              <h3 class="grid__title">services</h3>
              <div class="grid__overlay">
                <button class="viewbutton">view more</button>
              </div>
            </div>  
            <div class="project">
              <img class="project__image" src="../../assets/Rectangle 10.jpg" />
              <p>services</p>
              <h3 class="grid__title">services</h3>
              <div class="grid__overlay">
                <button class="viewbutton">view more</button>
              </div>
            </div> 
            <div class="project">
              <img class="project__image" src="../../assets/Rectangle 10.jpg" />
              <p>services</p>
              <h3 class="grid__title">services</h3>
              <div class="grid__overlay">
                <button class="viewbutton">view more</button>
              </div>
            </div>   
      </div>
    </div>

    <div class="app">
      <div class="app__content">
        <v-card class="card__app" :loading="loading" max-width="100%">
          <v-img class="card__img" src="../../assets/Rectangle 13.jpg"></v-img>
          <v-card-text class="card__text">
            <v-card-title>
              <h1>Add your court</h1>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              <p>
                Exercitation do quis dolore ex enim 
                excepteur commodo esse irure aliqua ullamco 
                fugiat. Ut magna et ipsum ex dolor minim cillum 
              </p>
            </v-card-subtitle>
            <v-btn
              class="ml-3"
              color="#30494B"
              elevation="2"
              large
              outlined
              rounded>
              Learn more  
            </v-btn>
          </v-card-text>
        </v-card>    
      </div>
    </div>

    <!-- for large screen -->
    <div class="discover">
      <div class="discover__text">
        <h1 class="discover__title">Discover Experiences</h1>
        <p class="discover__subtitle">Unique activities with local experts – in person or online.</p>
      </div>
      
      <div class="container d-flex">
      <div class="card">
        <div class="face face1 img1">
          <div class="content">
            <h3>Meet new people</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Exercitation do quis dolore  
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1 img2">
          <div class="content">
            <h3>Play abord</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Exercitation do quis dolore
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1 img3">
          <div class="content">
            <h3>Tournaments</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Exercitation do quis dolore
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>

    </div>

    <div class="app">
      <div class="app__content">
        <v-card class="card__app" :loading="loading" max-width="100%">
          <v-img class="card__img order" src="../../assets/Rectangle 20.jpg"></v-img>
          <v-card-text class="card__text">
            <v-card-title>
              <h1>Mobile app</h1>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              <p>
                Exercitation do quis dolore ex enim 
                excepteur commodo esse irure aliqua ullamco 
                fugiat. Ut magna et ipsum ex dolor minim cillum 
              </p>
            </v-card-subtitle>
            <v-btn
              class="ml-3"
              color="#30494B"
              elevation="2"
              large
              outlined
              rounded>
              Learn more  
            </v-btn>
          </v-card-text>
        </v-card>    
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      model: 0,
      cards: [
        {
          id: 1,
          time: '5:20pm',
          location: 'Syria',
          img: require('../../assets/Rectangle 10.jpg')
        },
        {
          id: 2,
          time: '5:20pm',
          location: 'Denmark',
          img: require('../../assets/Rectangle 13.jpg')
        },
        {
          id: 3,
          time: '5:20pm',
          location: 'London',
          img: require('../../assets/Rectangle 15.jpg')
        }
      ],
      services: [
        {
          id: 1,
          type: 'Find player',
          img: require('../../assets/Rectangle 10.jpg')
        },
        {
          id: 2,
          type: 'Find a coach',
          img: require('../../assets/Rectangle 13.jpg')
        },
        {
          id: 3,
          type: 'Shopping equipment',
          img: require('../../assets/Rectangle 15.jpg')
        },
        {
          id: 3,
          type: 'Find courts',
          img: require('../../assets/Rectangle 15.jpg')
        }
      ],
    }
  }
}
</script>

<style scoped>
#portfolio {
  margin-top: 30px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: 50vh;
  grid-gap: 10px;
  box-shadow: 4px 7px 10px #343a40; 
}
.project {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.project img {
  position: absolute;
  opacity: 0.7;
}
.project p {
  position: absolute;
  text-align: center;
  width: 100%;
  color: #ffffff;
  padding: 1em 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 3;
}
.project .grid__title {
  position: absolute;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  bottom: 0;
  font-weight: 100;
  font-size: 0.8em;
  z-index: 3;
  text-transform: uppercase;
  color: #eee;
  letter-spacing: 2px;
}

.project:hover .grid__overlay {
  transform: translateY(0%);
}

.grid__overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  grid-column: 1/-1;
  grid-row: 1/-1;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  transform: translateY(101%);
  transition: all 0.3s ease-in-out;
}
.grid__overlay button {
  background: none;
  outline: none;
  font-weight: 100;
  letter-spacing: 2px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-transform: uppercase;
  padding: 10px;
}
.grid__overlay button:hover {
  transition: all 0.3s ease-in-out;
  background: #ffffff;
  color: rgba(0, 0, 0);
  transform: scale(1.05);
}
.about{
  padding: 10%;
  background: #233E41;
}
.services{
  padding: 2em 0;
}
.topLocation{
  padding: 2em 0;
}
.discover{
  padding: 4em 0;
}
.discover__text{
  color: #ffffff;
}
.app{
  padding: 2em 0;
}
.court{
  padding: 2em 0;
}
/* .card{
  margin-left: 2%;
} */
.card__app{
  padding: .5em;
}
.card__img{
  height: 300px;
}
.location__content{
  display: flex;
  overflow: hidden;
}
.services__content{
  display: flex;
  overflow: hidden;
}
.sub{
  color: #ffffff;
  padding-bottom: .7em;
  position: relative;
}
.sub::before{
 content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #ffffff;
  width: 100px;
}
.line2{
  height: 2px;
  width: 100px;
  background: #ffffff;
  margin-top: -2%;
  margin-bottom: 4%;
}
.line{
  margin-left: 2%;
  height: 2px;
  width: 100px;
  background: #ffffff;
  margin: 3em 0;
}
.container{
	width: 100%;
	position: relative;
  display: flex;
  flex-wrap: wrap;
	justify-content: space-between;
}
.container .card{
	position: relative;
}
.container .card .face{
	width: 300px;
	height: 200px;
	transition: 0.5s;
}
.img1{
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("../../assets/dhkdfFxGHfU (1).jpg");
}
.img2{
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("../../assets/dhkdfFxGHfU (2).jpg");
}
.img3{
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("../../assets/dhkdfFxGHfU.jpg");
}
.container .card .face.face1{
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	transform: translateY(100px);
}
.container .card:hover .face.face1{
	background: #30494B;
  transform: translateY(0);
}
.container .card .face.face1 .content{
	transition: 0.5s;
}
.container .card:hover .face.face1 .content{
    opacity: 1;
}
.container .card .face.face1 .content .v-img1{
    max-width: 120px;
}
.container .card .face.face1 .content .v-img2{
    max-width: 120px;
    transform: translate(-1px,4px);
}
.container .card .face.face1 .content .v-img3{
    max-width: 120px;
    transform: translate(19px,4px);
}
.container .card .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}
.container .card .face.face2{
	position: relative;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 5px 11px -3px rgba(0, 0, 0, 0.5);
	transform: translateY(-100px);
}
.container .card:hover .face.face2{
    transform: translateY(0);
}
.container .card .face.face2 .content p{
	margin: 0;
	padding: 0;
}
.container .card .face.face2 .content a{
	margin: 15px 0 0;
	display: inline-block;
	color: #333;
	padding: 5px;
	border: 1px solid #333;
}
.container .card .face.face2 .content a:hover{
	background: #333;
	color: #fff;
}
@media screen and (max-width: 1045px){
  .lg-services{
    display: none;
  }
  .sub{
    margin: 2em 0;
  }
}
@media screen and (min-width: 600px) {
  .card__app{
    display: flex;
    border-radius: 10px;
    padding: 1em;
  }
  .card__img{
    height: 300px;
    width: 50%;
    order: 1;
  }
  .card__c{
    display: flex;
    border-radius: 10px;
  }
  .order{
    order: -1;
  }
  .app{
    padding: 2em 26px;
  }
  .services{
    padding: 3em 26px 4em 26px;
  }
  p{
    font-size: 1.2em;
  }
  .discover{
    padding: 4em 26px;
  }
  /* .discover__text
  .discover__title
  .discover__subtitle */
  .discover__card{
    background: #ffffff;
    color: #233E41;
  }
}
</style>