<template>
    <div>
        <div class="flex items-center justify-end py-[14px] pr-[100px] border-b-[1px] border-gray-300">
            <div class="ml-auto">
                <LogibugProfile @click="showPopup = true" />
            </div>
        </div>
        <DashboardPopup v-if="showPopup" @close="showPopup = false" />
    </div>
</template>
  
<script>
import LogibugProfile from '../major/LogibugProfile.vue';

export default {
    components: { LogibugProfile },
    data() {
        return {
            showPopup: false
        }
    }
}
</script>

<style lang="scss" scoped></style>