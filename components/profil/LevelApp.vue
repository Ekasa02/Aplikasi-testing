<template>
  <div>
    <div
      class="mx-5 rounded-[28px] px-6 py-2 w-[120px] flex items-center justify-center mt-3 text-white font-semibold text-sm bg-[linear-gradient(143.07deg, #5883D6 0%, #C2CFFB 98.57%)]">
      <h1>Beginner</h1>
    </div>
    <div class="px-5">
      <p class="pt-2 pr-5">
        50 Issue telah di uji. selesaikan 150 issue lagi untuk <br />mencapai
        tingkat menengah
      </p>
    </div>
    <hr class="border-gray-300 my-4 w-full" />
    <div class="">
      <div class="flex text-[16px] px-5">
        <img src="../assets/Setting.svg" />
        <NuxtLink to="/accsetting" class="pl-3">Account Setting</NuxtLink>
      </div>
      <hr class="border-gray-300 my-4 w-full" />
      <div class="flex text-[16px] px-5">
        <img src="../assets/Achievment.svg" />
        <NuxtLink to="/achievement" class="pl-3">Achievement</NuxtLink>
      </div>
      <hr class="border-gray-300 my-4 w-full" />
      <div class="flex text-[16px] px-5">
        <img src="../assets/InfoCircle.svg" />
        <NuxtLink to="/about" class="pl-3">About</NuxtLink>
      </div>
      <hr class="border-gray-300 my-4 w-full" />
      <div class="flex text-[16px] pb-5 px-5">
        <img src="../assets/Logout.svg" />
        <button @click="showLogout" class="pl-3">Log Out</button>
      </div>
    </div>
    <PopupLog v-if="isPopupLogout" @showLogout="showLogout" />
  </div>
</template>

<script>
import PopupLog from "../loginform/logout/PopupLog.vue";
export default {
  components: { PopupLog },
  data() {
    return {
      isPopupLogout: false,
    }
  },
  methods: {
    showLogout() {
      this.isPopupLogout = true;
    }
  }
}
</script>
