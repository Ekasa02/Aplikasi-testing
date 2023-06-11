<template>
    <div>
        <div class="flex items-center justify-end py-[14px] pr-[100px] border-b-[1px] border-gray-300">
            <button @click="showProfile" class="ml-auto" >
                <LogibugProfile  />
            </button>
        </div>
    </div>
</template>
  
<script>
import LogibugProfile from '../major/LogibugProfile.vue';

export default {
    components: { LogibugProfile, },
    data() {
        return {
            isProfileVisible: false
        }
    },
    methods:{
        showProfile() {
            this.$emit("showProfile");
        },
    }
}
</script>

<style lang="scss" scoped></style>