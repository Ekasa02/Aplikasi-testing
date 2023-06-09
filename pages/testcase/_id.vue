<template>
    <div>
        <TestHeader @showProfile="showProfile"/>
        <DashboardPopup v-if="isProfileVisible" />
        <div class="px-[100px] py-[50px]">
            <div class="flex justify-between">
                <TestName test-name="LogiBug" />
                <button class="bg-[#554AF0] text-white font-bold py-2 px-4 rounded" @click="showCreate">Create test
                    case</button>
            </div>
            <TestCreate v-if="isCreateVisible" :id="id" :project-id="projectId" @hideCreate="hideCreate" />
            <TestList :items="items" :project-id="projectId" />
        </div>
    </div>
</template>

<script>

import TestHeader from '../../components/testcase/TestHeader.vue';
import TestName from '../../components/testcase/TestName.vue';
import TestList from '../../components/testcase/TestList.vue';
import TestCreate from '../../components/testcase/TestCreate.vue';
import DashboardPopup from '../../components/dashboard/DashboardPopup.vue';

export default {
    components: { TestHeader, TestName, TestList, TestCreate, DashboardPopup },
    layout: "SidebarLayout",
    data() {
        return {
            isCreateVisible: false,
            isProfileVisible:false,
            id: this.$route.params.id,
            items: [],
            projectId: '',
        }
    },
    mounted() {
        this.getTestcase();
        this.getProjectid();
    },
    methods: {
        showCreate() {
            this.isCreateVisible = true;
        },
        hideCreate() {
            this.isCreateVisible = false;
        },
        showProfile() {
            this.isProfileVisible = !this.isProfileVisible;
        },
        async getTestcase() {
            try {
                const response = await this.$axios.$get(`/versions/${this.id}`)
                console.log(response)
                this.projectId = response.data[0].project_id
                console.log(this.projectId)
            } catch (e) {
                console.log(e)
            }
        },
        async getProjectid() {
            try {
                const response = await this.$axios.$get(`/test_cases/?version_id=${this.id}`)
                console.log(response)
                this.items = response.data
            } catch (e) {
                console.log(e)
            }
        },       
    },
}
</script>

<style lang="scss" scoped></style>