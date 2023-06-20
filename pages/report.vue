<template>
    <div>
        <SettingProfile @showProfile="showProfile" />
        <div class=" bg-gray-100 ">
            <DashboardPopup v-if="isProfileVisible" />
            <div class="px-4 md:px-14 items-center justify-center">
                <ReportTest :items="items" />
            </div>
        </div>
    </div>
</template>

<script>
import SettingProfile from '../components/accountsetting/SettingProfile.vue';
import ReportTest from '../components/report/ReportTest.vue';

export default {
    components: {
        SettingProfile,
        ReportTest,

    },
    layout: 'SidebarLayout',
    data() {
        return {
            isProfileVisible: false,
            items: []
        }
    },
    mounted(){
        this.getProject()
    },
    methods: {
        showProfile() {
            this.isProfileVisible = !this.isProfileVisible;
        },
        async getProject() {
            try {
                const response = await this.$axios.$get('/projects')
                // console.log(response)
                this.items = response.data
            } catch (e) {
                // console.log(e)
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>