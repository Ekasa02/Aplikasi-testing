<template>
  <div class="py-[40px] md:py-[70px] items-center bg-[#EDF1FF] font-montserrat">
    <div class="flex flex-col md:flex-row md:justify-around">
      <SosialMedia />
      <CompanyFooter />
      <ServiceFooter />
      <ContactFooter />
    </div>
    <div class="flex justify-center md:mt-[70px] mt-[30px]">
      <MainFooter />
    </div>
  </div>
</template>
  
<script>
import MainFooter from './footer/MainFooter.vue';
import SosialMedia from './footer/SosialMedia.vue';
import CompanyFooter from './footer/CompanyFooter.vue';
import ServiceFooter from './footer/ServiceFooter.vue';
import ContactFooter from './footer/ContactFooter.vue';

export default {
  components: {
    SosialMedia,
    CompanyFooter,
    ServiceFooter,
    ContactFooter,
    MainFooter
  }
}
</script>
  
<style ></style>+