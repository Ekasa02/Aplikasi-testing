<template>
    <div>
        <VersionHeader @showProfile="showProfile" />
        <DashboardPopup v-if="isProfileVisible" />
        <div class="px-[100px] py-[50px]">
            <div class="flex justify-between">
                <VersionName project-name="Logibug" platform="Mobile" type-test="Manual" />
                <div class="flex gap-x-4">
                    <button
                        class="bg-[#FFFFFF] text-[#554AF0] font-bold py-2 px-4 rounded border border-[#554AF0] hover:text-white hover:bg-red-500"
                        @click="infoInvite">
                        Invite
                    </button>
                    <PopupInvite v-if="isPopupInvite" :id="id" @closeInvite="closeInvite" />
                    <button v-if="member !== 'dev'" class="bg-[#554AF0] text-white font-bold py-2 px-4 rounded"
                        @click="showCreate">
                        Create version
                    </button>
                </div>
            </div>
            <VersionCreate v-if="isCreateVisible" :id="id" @hideCreate="hideCreate" />
            <VersionListApi :items="items" :role="member" />
        </div>
    </div>
</template>
  
<script>
import PopupInvite from '../../components/projectedit/invitemember/PopupInvite.vue';
import VersionHeader from '../../components/createversion/VersionHeader.vue';
import VersionName from '../../components/createversion/VersionName.vue';
import VersionListApi from '../../components/createversion/VersionListApi.vue';
import VersionCreate from '../../components/createversion/VersionCreate.vue';
import DashboardPopup from '../../components/dashboard/DashboardPopup.vue';

export default {
    components: {
        PopupInvite,
        VersionHeader,
        VersionName,
        VersionListApi,
        VersionCreate,
        DashboardPopup
    },
    layout: 'SidebarLayout',
    data() {
        return {
            isCreateVisible: false,
            id: this.$route.params.id,
            items: [],
            isPopupInvite: false,
            isProfileVisible: false,
            member: '',
            user: ''
        }
    },
    async created() {
        await this.getVersion()
    },
    mounted() {
        this.getMember()
    },
    methods: {
        closeInvite() {
            this.isPopupInvite = false
        },
        showCreate() {
            this.isCreateVisible = true
        },
        infoInvite() {
            this.isPopupInvite = true
        },
        showProfile() {
            this.isProfileVisible = !this.isProfileVisible;
        },
        hideInvite() {
            this.isPopupInvite = false
        },
        hideCreate() {
            this.isCreateVisible = false
        },
        async getVersion() {
            try {
                const response = await this.$axios.$get(
                    `/versions/?project_id=${this.id}`
                )
                this.items = response.data
            } catch (e) {
                console.log(e)
            }
        },
        async getMember() {
            try {
                const response = await this.$axios.$get(
                    `/members?project_id=${this.id}`
                )
                await this.getProfile()
                this.member = response.data.filter(member => member.email === this.user)[0].role;
                console.log(this.member)
            } catch (e) {
                console.log(e)
            }
        },
        async getProfile() {
            try {
                const response = await this.$axios.$get('/profiles')
                this.user = response.data.email
            } catch (e) {
                console.log(e)
            }
        }
    },
}
</script>
  
<style lang="scss" scoped></style>
  