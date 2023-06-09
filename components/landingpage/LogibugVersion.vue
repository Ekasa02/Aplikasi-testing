<template>
  <div class="py-[70px] flex flex-col justify-center items-center font-monserrat overflow-hidden px-[30px]">
    <TextPage />
    <div
      class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:gap-x-[20px] lg:gap-x-[40px] md:justify-center mt-[50px]">
      <div class="flex flex-col justify-between items-center gap-x-10">
        <img src="../assets/ContentImage4.svg" alt="images" class="h-[300px]">
        <ImageContent />
        <RegisterButton />
      </div>
      <div class="justify-between items-center gap-x-10">
        <div class="flex flex-col justify-between items-center gap-x-10">
          <img src="../assets/ContentImage5.svg" alt="images" class="h-[300px]">
          <DownloadContent />
          <DownloadButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadContent from './versionbutton/DownloadContent.vue';
import ImageContent from './versionbutton/ImageContent.vue';
import RegisterButton from './versionbutton/RegisterButton.vue';
import DownloadButton from './versionbutton/DownloadButton.vue';
import TextPage from './TextPage.vue';

export default {
  components: {
    ImageContent,
    TextPage,
    RegisterButton,
    DownloadButton,
    DownloadContent,
  }
}
</script>
  
<style></style>