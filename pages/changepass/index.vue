<template>
  <div class="h-screen flex">
    <div class="md:w-2/5 px-[30px] py-[30px] lg:px-[60px] flex items-center justify-items-center">
      <div class="margin-x-auto">
        <LogibugLogo />
        <changepass-title />
        <changepass-form />
      </div>
    </div>
    <div class="hidden md:block w-3/5 bg-blue-500">
      <img src="../../components/assets/FrameForm.svg" alt="Image" class="object-cover w-full h-full">
    </div>
  </div>
</template>
  
<script>
import ChangepassTitle from '~/components/loginform/changepassword/ChangepassTitle.vue';
import ChangepassForm from '~/components/loginform/changepassword/ChangepassForm.vue';
import LogibugLogo from '~/components/major/LogibugLogo.vue';

export default {
  components: {
    LogibugLogo,
    ChangepassTitle,
    ChangepassForm,
  },
  auth:false,
}
</script>
  
  
<style >

</style>