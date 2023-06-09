<template>
    <div>
        <div class="ml-auto">
            <button @click="showProfile" class="m-0 p-0">
                <LogibugProfile />
            </button>
        </div>
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
    },
    methods: {
        showProfile() {
            this.$emit("showProfile");
        },
    }
}
</script>

<style lang="scss" scoped></style>