<template>
    <div class="font-montserrat h-screen flex">
        <div class="md:w-2/5 px-[30px] lg:px-[60px] flex items-center">
            <div>
                <LogibugLogo />
                <RegisterTitle />
                <RegisterForm />
                <RegisterTerms />
            </div>
        </div>
        <div class="hidden md:block w-3/5 bg-blue-500">
      <img src="../components/assets/FrameForm.svg" alt="Image" class="object-cover w-full h-full">
        </div>
    </div>
</template>
  
<script>

import LogibugLogo from '../components/major/LogibugLogo.vue';
import RegisterForm from '../components/loginform/registerpage/RegisterForm.vue';
import RegisterTitle from '../components/loginform/registerpage/RegisterTitle.vue';
import RegisterTerms from '../components/loginform/registerpage/RegisterTerms.vue';

export default {
    components: {
        LogibugLogo,
        RegisterForm,
        RegisterTitle,
        RegisterTerms
    },
    auth : false
}
</script>
  
<style lang="scss" scoped></style>