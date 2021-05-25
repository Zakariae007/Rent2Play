<template>
  <div class="container parent">
    <!-- Mobile Navigation -->
    <div class="div2">
      <Nav v-if="!mobileNav" class="div2" />
    </div>
    <!-- Wide Screen Navigation -->
    <NavBar v-if="mobileNav" />
    <!-- Content { Subtitle, title, button } -->
    <section class="content div3">
      <!-- Subtitle -->
      <div class="content__title">
        <h1 class="subtitle">Find The Perfect Court To Play</h1>
        <p class="title">
          Book pitches and courts and connect with the world's largest racket
          player community
        </p>
      </div>
      <!-- Find a game button modeling  -->
      <div class="content__form">
        <form class="form" action @submit.prevent="findCourt">
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <!-- Finding Button -->
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#233E41"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  width="150"
                  height="50"
                  class="btn"
                  >Find a game</v-btn
                >
              </template>

              <v-card>
                <!-- Model Subtitle -->
                <v-card-title color="#233E41" class="headline grey lighten-2"
                  >Find a game</v-card-title
                >

                <!-- Model Content -->
                <v-card-text>
                  <!-- Location select model -->
                  <v-select
                    v-model="selectLocation"
                    :items="court_data_location"
                    menu-props="auto"
                    label="Where are you from ?"
                    hide-details
                    prepend-icon="mdi-map"
                    single-line
                  ></v-select>

                  <br />

                  <div class="d-flex">
                    <!-- Start Time Select model -->
                    <v-menu
                      ref="menu"
                      v-model="menu1"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="time"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="startTime"
                          label="Start time select"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu1"
                        v-model="startTime"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                      ></v-time-picker>
                    </v-menu>
                    <!-- End Time select model -->
                    <v-menu
                      ref="menu"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="time"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="endTime"
                          label="End Time select"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu2"
                        v-model="endTime"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                      ></v-time-picker>
                    </v-menu>
                  </div>
                  <!-- Date Select model  -->
                  <v-menu
                    v-model="menu3"
                    min-width="auto"
                    :nudge-right="40"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Select a date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu3 = false"
                    ></v-date-picker>
                  </v-menu>

                  <!-- Sport select model -->
                  <v-select
                    v-model="sport"
                    :items="court_data_sports"
                    menu-props="auto"
                    label="Add a sport"
                    hide-details
                    prepend-icon="mdi-sport"
                    single-line
                  ></v-select>
                </v-card-text>

                <v-divider></v-divider>

                <!-- Button submit model -->
                <v-card-actions v-if="buttonShow">
                  <v-spacer></v-spacer>
                  <button
                    @click="dialog = false"
                    color="primary"
                    type="submit"
                  >Find</button>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Nav from "./Nav";
// import axios from 'axios';

export default {
  name: "HeroSection",
  components: {
    NavBar,
    Nav
  },
  data() {
    return {
      // logical
      menu: false,
      menu1: false,
      menu2: false,
      menu3: false,
      modal: false,
      dialog: false,
      mobileNav: true,
      buttonShow: true,

      // select value
      startTime: null,
      endTime: null,
      date: "",
      sport: "",
      selectLocation: "",

      // local data location
      court_data_sports: ["Tennis", "Padel", "Badminton"],
      court_data_location: ["Vilinius", "Alytus"]
    };
  },
  computed:{
      startTimeISO : function() {
        return new Date(this.date, this.startTime).toISOString()
        },
      endTimeISO : function() {
        return new Date(this.date, this.endTime).toISOString()
        }
  },
  methods: {
    toggleNav() {
      this.mobileNav = window.innerWidth <= 915;
    },
    findCourt() {
      // axios.get(uri)
      // .then((res) => {
      //   this.temperature = res.data.temperature;
      // });

      const findCourtInfo = {
        selectLocation: this.selectLocation,
        startTimeISO: this.startTimeISO,
        endTimeISO: this.endTimeISO,
        sport: this.sport,
        // Start time : 2021-05-09T08:00:00.000Z
        // End time: 2021-05-09T09:00:00.000Z
      };
        console.log(findCourtInfo);

      // this.$store.dispatch(
      //   //"", 
      //  // findCourtInfo
      // )
      // .then(() => {
      //   this.$router.push({ name: "find_court" });
      // });

      // Reset Data
      // this.selectLocation = "";
      // this.startTimeISO = "";
      // this.endTimeISO = "";
      // this.sport = "";
    }
  },
  created() {
    // this for nav responsive
    this.toggleNav();
    window.addEventListener("resize", this.toggleNav);

    // this for fatching data
    // this.findCourt('api/temperature');

    // setInterval(()=> {
    //   this.fetchItems('api/temperature');
    // }, 500);

    //this for sorting data
    // this.court_row.forEach(item => this.court_data_sport.push(item.sport));
    // this.court_row.forEach(item => this.court_data_location.push(item.address));

    // if(!this.date && !this.sports && !this.selectLocation) {
    //   return this.buttonShow = false;
    // } else return this.buttonShow = true;
  }
};
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 5% repeat(3, 1fr) 5%;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 6;
}
.div2 {
  grid-area: 1 / 2 / 2 / 5;
}
.div3 {
  grid-area: 2 / 2 / 5 / 5;
}

.container {
  max-width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/bg.jpg");
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  width: calc(100% - 14%);
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.subtitle {
  color: #ffffff;
  font-family: "Revalia", cursive;
  font-size: 1.8em;
  padding: 0.4em 5px;
}
.title {
  color: #ffffff;
  font-weight: lighter;
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  padding: 1em 5px;
  line-height: 1.7em;
}
.btn {
  display: flex;
  margin-left: 5px;
}
@media screen and (min-width: 600px) {
  .content__title .title {
    font-size: 2em;
  }
}
</style>
