<template>
    <div>
        <SettingProfile @showProfile="showProfile" />
        <div class=" bg-gray-100 ">
            <DashboardPopup v-if="isProfileVisible" />
            <div class="px-14 items-center justify-center">
                <ChangeNotif :items="items" />
            </div>
        </div>
    </div>
</template>

<script>
import SettingProfile from '../components/accountsetting/SettingProfile.vue';
import ChangeNotif from '../components/notif/ChangeNotif.vue';

export default {
    components: {
        SettingProfile,
        ChangeNotif,

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