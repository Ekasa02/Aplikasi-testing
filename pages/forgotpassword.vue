<template>
  <div class="h-screen flex">
    <div class="md:w-2/5 px-[30px] py-[30px] lg:px-[60px] flex items-center justify-items-center">
      <div class="margin-x-auto">
        <LogibugLogo />
        <ForgotTitle />
        <ForgotForm />
      </div>
    </div>
    <div class="hidden md:block w-3/5 bg-blue-500">
      <img src="../components/assets/FrameForm.svg" alt="Image" class="object-cover w-full h-full">

    </div>
  </div>
</template>
  
<script>

import ForgotTitle from '../components/loginform/forgotpassword/ForgotTitle.vue';
import LogibugLogo from '../components/major/LogibugLogo.vue';
import ForgotForm from '../components/loginform/forgotpassword/ForgotForm.vue';

export default {
  components: {
    LogibugLogo,
    ForgotTitle,
    ForgotForm
  }
}
</script>
  
<style >
.h-screen {
  min-height: 100vh;
}

.bg-blue-500 {
  height: 100%;
}
</style>