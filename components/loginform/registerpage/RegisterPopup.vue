<template>
    <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
        <div class="text-center bg-white w-[30%] rounded-2xl flex flex-col justify-center items-center py-[70px] relative">
            <button class="absolute top-0 right-0 m-[32px]" @click="closeModal">
                <img class="h-9 w-9" src="../svg/CloseCircle.svg" alt=" " style="filter: invert(28%) sepia(91%) saturate(3358%) hue-rotate(237deg) brightness(94%) contrast(99%)">
            </button>
            <img class="w-[50%] mb-8" src="../popup/svg/Group 64.svg" alt="Images" @click="closeModal"/>
            <h1 class="font-semibold text-[24px] leading-7 mb-2 text-[#1A1A1A]">Congratulations!</h1>
            <p class="font-medium text-[#1A1A1A] text-[20px] leading-7">Register Success</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
    closeModal() {
      this.$emit("close");
    },
  },
}
</script>

<style lang="sass" scoped>

</style>