<template>
  <div  class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#33333385]" @click="showLogout">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div  class="sm:pr-[300px]" @click="closeModal">
        <img  class="cursor-pointer pr-4" src="../.././assets/CloseCircle.svg" alt="image">
      </div>
      <div class="pt-6 pl-11 pr-7">
        <img src="../../assets/Logout logo.svg" alt="image">
        <h1 class="text-center pt-7 font-['Montserrat'] font-bold">Logout Account?</h1>
        <p class="text-center font-['Montserrat']">Are you sure you want to logout the account</p>
      </div>
      <div class="flex pt-[30px] justify-center items-center">
        <button-no class="mr-[19px]"></button-no>
        <button-yes></button-yes>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonNo from "./ButtonNo.vue";
import ButtonYes from './ButtonYes.vue';

export default {
  components:{
      ButtonNo, 
      ButtonYes,
  },
    methods:{
      closeModal(){
        this.$emit("closeModal")
      },
       showLogout(){
            this.$emit("showLogout")
        }
    },
}
</script>