<template>
  <section>
    <!-- Wide Screen Navigation -->
    <FindNav v-if="!mobileShow"/>
    <!-- Small Screen Navigation -->
    <NavBar v-if="mobileShow"/>
    <!-- Court Card Content -->
    <CourtCard 
      v-for="court_data in court_data_finding" 
      :key="court_data.id" 
      :court_data="court_data" 
    />
    <!-- Footer section -->
    <FooterTow />
  </section>
</template>

<script>
import FindNav from "../components/Finding/FindNav"
import NavBar from "../components/Home/NavBar"
import CourtCard from "../components/Finding/CourtCard"
import FooterTow from "../components/Finding/FooterTow"

export default {
  name: 'Find_court',
  components: {
    FindNav,
    NavBar,
    CourtCard,
    FooterTow
  },
  data() {
    return {
      mobileShow: false,
      court_data_finding: this.$store.state.court_information,
    }
  },
  methods: {
    toggleNav() {
      this.mobileShow = window.innerWidth <= 915
    },
  },
  created() {
    this.toggleNav();
    window.addEventListener('resize', this.toggleNav);
  }
}
</script>

<style scoped>
section{
  background: #233E41;
  height: 100%;
}
</style>