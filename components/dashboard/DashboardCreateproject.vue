<template>
    <div class="">
        <button class="bg-[#554AF0] hover:bg-blue-600 text-white font-bold md:py-[8.5px] py-2 px-2 md:px-8 rounded-[8px]"
            @click="showPopup">
            Create Project
        </button>
        <PopupCreate v-if="showPopup" @close="closePopup" />
    </div>
</template>
  
<script>
import PopupCreate from '../projectedit/createproject/PopupCreate.vue'

export default {
    components: {
        PopupCreate
    },
    data() {
    },
    methods: {
        showPopup() {
            this.$emit("showPopup");
        },
    }
}
</script>
  
<style lang="scss" scoped></style>
  