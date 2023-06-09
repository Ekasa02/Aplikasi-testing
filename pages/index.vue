<template>
  <div class="w-100% overflow-x-hidden font-montserrat">
    <LogibugNavbar />
    <LogibugHero />
    <AboutPage />
    <VersionPage />
    <FooterPage />
  </div>
</template>

<script>
import LogibugNavbar from '../components/landingpage/LogibugNavbar.vue';
import LogibugHero from '../components/landingpage/LogibugJumbotron.vue';
import AboutPage from '../components/landingpage/LogibugAbout.vue';
import VersionPage from '../components/landingpage/LogibugVersion.vue';
import FooterPage from '../components/landingpage/LogibugFooter.vue';

export default {
  components: {
    LogibugNavbar,
    LogibugHero,
    AboutPage,
    VersionPage,
    FooterPage
  },
  auth : false,
}
</script>

<style lang="scss" scoped></style>