<template>
    <div>
        <SettingProfile @showProfile="showProfile"/>
        <div class=" bg-gray-100 ">
            <DashboardPopup v-if="isProfileVisible" />
            <div class="px-14 items-center justify-center">
                <ReportTest/>
            </div>
        </div>
    </div>
</template>

<script>
import SettingProfile from '../components/accountsetting/SettingProfile.vue';
import ReportTest from '../components/report/ReportTest.vue';

    export default {
        data(){
            return{
                isProfileVisible:false,
            }
        },
        components:{
            SettingProfile,
            ReportTest,
          
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