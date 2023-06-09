<template>
    <div>
        <SettingProfile @showProfile="showProfile"/>
        <div class=" bg-[#FBFBFC] md:px-4  md:py-3 ">
            <DashboardPopup v-if="isProfileVisible" />
            <div class="rounded bg-[#C2CFFB] border border-solid border-[#EFEFF0] items-center justify-center">
                <AboutLogibug/>
            </div>
        </div>
    </div>
</template>

<script>
import SettingProfile from '../components/accountsetting/SettingProfile.vue';
import AboutLogibug from '../components/about/AboutLogibug.vue';

    export default {
        data(){
            return{
                isProfileVisible:false,
            }
        },
        components:{
            SettingProfile,
            AboutLogibug
          
        },
        methods:{
            showProfile() {
                this.isProfileVisible = !this.isProfileVisible;
            },
        },
        layout:'SidebarLayout',
    }
</script>

<style lang="scss" scoped>

</style>