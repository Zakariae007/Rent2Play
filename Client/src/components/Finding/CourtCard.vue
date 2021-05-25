<template>
  <div class="contact">
    <div class="contact__sub">
      <p>{{court_data.city}} -</p>
      <p>{{court_data.bookingStartTime}} -</p>
      <p>{{court_data.bookingEndTime}} -</p>
      <p>{{court_data.sport}}</p>
    </div>
    <div class="contact__subtitle">
      <span class="active">{{court_data.name}} </span>
      <span>in {{court_data.city}}</span>
    </div>
    <div class="chips">
      <v-chip color="white" class="chip" outlined>{{court_data.sport}}</v-chip>
      <v-chip color="white" class="chip" outlined>{{court_data.price}}</v-chip>
      <v-chip color="white" class="chip" outlined>{{court_data.courtType}}</v-chip>
    </div>

    <div class="app">
      <div class="app__content">
        <v-card class="card__app d-flex" :loading="loading" max-width="100%">
          <v-carousel cycle height="250" hide-delimiter-background>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-card-text class="card__text">
            <v-card-title>
              <h1>{{court_data.courtType}}</h1>
              <v-spacer></v-spacer>
              <v-btn icon class="icon" @click="colortoggle = !colortoggle">
                <v-icon :color="colorSwitch()" class="icon-link">
                  mdi-heart
                </v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
              <p>
                <span class="active">Address:</span>{{court_data.address}}
              </p>
              <p class="active">{{court_data.price}}</p>
            </v-card-subtitle>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourtCard",
  data() {
    return {
      colortoggle: false,
      items: [
        {
          src: require("@/assets/dhkdfFxGHfU (1).jpg")
        },
        {
          src: require("@/assets/dhkdfFxGHfU (2).jpg")
        },
        {
          src: require("../../assets/Rectangle 10.jpg")
        }
      ]
    };
  },
  props: {
    court_data: Object
  },
  methods: {
    colorSwitch() {
      if (this.colortoggle) {
        return "red";
      } else return "white";
    }
  },
  cerated() {
    this.colorSwitch();
  }
};
</script>

<style scoped>
.active {
  font-weight: bold;
}
.app {
  width: 66%;
  padding: 2em 0 5em 0;
}
.card__app {
  padding: 0.5em;
}
.card__img {
  height: 300px;
  width: 40%;
}
.order {
  order: -1;
}
.icon {
  background: #233e41;
  box-shadow: 0px 2px 7px 3px rgb(0 0 0 / 50%);
}
.icon-link {
  margin-bottom: -4px;
  color: red;
}

.contact{
  width: 86.041%;
  margin: 50px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contact__sub{
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 20.5%;
  margin-right: 20px;

  letter-spacing: .4px;
  font-weight: lighter;
  color: #ffffff;
}
.contact__subtitle{
  text-shadow: -2px 5px 7px rgb(0 0 0 / 50%);

  font-size: 43px;
  font-weight: 700;
  color: #ffffff;
}
.active{
  color: rgba(211, 211, 86);
}
.chips{
  margin-top: 10px;
  width: 31%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chip{
  box-shadow: inset 0px 5px 15px 2px rgb(0 0 0 / 50%);
}


/* responsive */
@media screen and (max-width: 740px) {
  .chips {
    width: 65%;
    margin-top: 20px;
  }
  .contact__sub {
    width: 50%;
    margin-top: 20px;
  }
  .app {
    width: 76%;
  }
  .card__app {
    flex-direction: column;
  }
  .icon {
    box-shadow: 0px 1px 8px 2px rgb(0 0 0 / 50%);
  }
}
</style>
