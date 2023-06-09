<template>
  <div class="h-screen flex">
    <div class="md:w-2/5 px-[30px] py-[30px] lg:px-[60px] flex items-center justify-items-center">
      <div class="margin-x-auto">
        <LogibugLogo />
        <LoginTitle />
        <LoginForm :submitForm="loginUser" />
      </div>
    </div>
    <div class="hidden md:block w-3/5 bg-blue-500">
      <img src="../components/assets/FrameForm.svg" alt="Image" class="object-cover w-full h-full">
    </div>
  </div>
</template>
  
<script>
import LoginTitle from '../components/loginform/loginpage/LoginTitle.vue';
import LoginForm from '../components/loginform/loginpage/LoginForm.vue';
import LogibugLogo from '../components/major/LogibugLogo.vue';

export default {
  components: {
    LogibugLogo,
    LoginTitle,
    LoginForm,
  },
  auth : false,
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith('local', {
        data: loginInfo
      })
      alert('You pressed a button!')
    }
  }
}
</script>
  
<style lang="scss" scoped></style>