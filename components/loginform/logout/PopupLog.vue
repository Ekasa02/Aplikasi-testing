<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#33333385]" @click="showLogout">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div class="float-right" @click="closeLogout">
        <img class="cursor-pointer " src="../.././assets/CloseCircle.svg" alt="image">
      </div>
      <div class="pt-6 pl-11 pr-7">
        <img src="../../assets/Logout logo.svg" alt="image">
        <h1 class="text-center pt-7 font-['Montserrat'] font-bold">Logout Account?</h1>
        <p class="text-center font-['Montserrat']">Are you sure you want to logout the account</p>
      </div>
      <div class="flex pt-[30px] justify-center items-center">
        <div class="mr-[19px]" @click="closeLogout">
          <button class="font-['Montserrat'] bg-[#554AF0] text-white font-bold py-2 px-4 rounded">
            No
          </button>
        </div>
        <button-yes></button-yes>
      </div>
    </div>
  </div>
</template>

<script>
// import ButtonNo from "./ButtonNo.vue";
import ButtonYes from './ButtonYes.vue';

export default {
  components: {
    // ButtonNo,
    ButtonYes,
  },
  methods: {
    closeLogout() {
      this.$emit("closeLogout")
    },
    showLogout() {
      this.$emit("showLogout")
    }
  },
}
</script>