<template>
    <div>
        <SettingProfile @showProfile="showProfile" />
        <div class=" bg-gray-100 ">
            <DashboardPopup v-if="isProfileVisible" class="z-10"/>
            <div class="md:px-14 px-4 items-center justify-center ">
                <ReportBar :project-id="id" />
            </div>
        </div>
    </div>
</template>

<script>
import SettingProfile from '../../components/accountsetting/SettingProfile.vue';
import ReportBar from '../../components/report/ReportBar.vue';

export default {
    components: {
        SettingProfile,
        ReportBar,

    },
    layout: 'SidebarLayout',
    data() {
        return {
            id: this.$route.params.id,
            isProfileVisible: false,
        }
    },
    methods: {
        showProfile() {
            this.isProfileVisible = !this.isProfileVisible;
        },
    },
}
</script>

<style lang="scss" scoped></style>