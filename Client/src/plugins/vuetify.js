import Vue from "vue";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css"; // Add this line

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: false,
  },
  themes: {
    light: {
      primary: "#4682b4",
      secondary: "#b0bec5",
      accent: "#8c9eff",
      error: "#b71c1c",
    },
  },
})