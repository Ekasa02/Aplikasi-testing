<template>
    <div class="flex gap-x-4">
        <button class="bg-[#FFFFFF] text-[#554AF0] font-bold py-2 px-4 rounded border border-[#554AF0] hover:text-white hover:bg-red-500">Member</button>
        <button class="bg-[#554AF0] text-white font-bold py-2 px-4 rounded" @click="showCreate">Create version</button>
        <VersionCreate v-if="isCreateVisible" @hideCreate="hideCreate"/>
    </div>
</template>

<script>
import VersionCreate from './VersionCreate.vue';

export default {
    components: { VersionCreate },
    data() {
        return {
            isCreateVisible: false,
        }
    },
    methods: {
        showCreate() {
            this.isCreateVisible = true;
        },
        hideCreate() {
            this.isCreateVisible = false;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>