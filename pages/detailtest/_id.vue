<template>
    <div>
        <DetailHeader @showProfile="showProfile"/>
        <DashboardPopup v-if="isProfileVisible" />
        <div class="px-[100px] py-[50px] font-montserrat">
            <div>
                <div class="flex gap-x-2">
                    <h1 class="text-xl font-semibold">Test Case</h1>
                    <div class="ml-auto">
                        <button class="flex bg-[#EBEBFE] rounded items-center px-3 py-2 float-right" @click="showEdit">
                            <img src="../../components/assets/Edit.svg" />
                            <p class="ml-2">Edit</p>
                        </button>
                    </div>
                    <div class="pl-2">
                        <button class="flex bg-[#FFE5E6] items-center px-3 py-2 rounded" @click="showDelete">
                            <img src="../../components/assets/DeleteOutlined.svg" />
                            <p class="ml-2">Delete</p>
                        </button>
                    </div>
                </div>
                <h1 class="text-xl font-semibold">{{ items.testcase }}</h1>
                <div class="grid grid-cols-2 gap-4">
                    <div class="w-2/3">
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Scenario</h1>
                            <p class="mt-2">{{ scenario }}</p>
                        </div>
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Test Category</h1>
                            <div
                                class="font-Montserrat w-min text-[13px] bg-[#FCD051] text-white leading-[18px] py-2 px-5 rounded-md mt-2">
                                {{ items.test_category }}
                            </div>
                        </div>
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Pre Condition</h1>
                            <p class="mt-2">{{ items.pre_condition }}</p>
                        </div>
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Test Steps</h1>
                            <p class="mt-2">{{ items.test_step }}</p>
                        </div>
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Expectation</h1>
                            <p class="mt-2">{{items.expectation }}</p>
                        </div>
                    </div>
                    <div class="">
                        <AddResult :item-id="itemId" :role="member" />
                    </div>
                </div>
            </div>
        </div>
        <EditTest v-if="isEditVisible" :item-id="itemId" :project-id="projectId" @closeModal="closeModal" />
        <DeleteTest v-if="isDeleteVisible" :item-id="itemId" :scenario-id="versionId" @closeDelete="closeDelete" />
    </div>
</template>
  
<script>
import AddResult from '../../components/detailtestcase/AddResult.vue';
import DetailHeader from '../../components/detailtestcase/DetailHeader.vue';
import EditTest from '../../components/detailtestcase/EditTest.vue';
import DeleteTest from '../../components/detailtestcase/DeleteTest.vue';
import DashboardPopup from '../../components/dashboard/DashboardPopup.vue';


export default {
    components: {
        AddResult,
        DetailHeader,
        EditTest,
        DeleteTest,
    DashboardPopup

    },
    layout: "SidebarLayout",
    data() {
        return {
            id: this.$route.params.id,
            items: [],
            itemId: '',
            projectId: '',
            member: '',
            scenarioId: '',
            versionId: '',
            scenario: '',
            isEditVisible: false,
            isDeleteVisible: false,
      isProfileVisible: false,

        };
    },
    mounted() {
        this.getTestcase().then(() => {
            this.getMember();
            this.getScenario();
        });
    },
    methods: {
        async getTestcase() {
            try {
                const response = await this.$axios.$get(`/test_cases/${this.id}`);
                this.items = response.data
                this.itemId = response.data.id
                this.projectId = response.data.project_id
                this.scenarioId = response.data.scenario_id
                this.versionId= response.data.version_id
            } catch (e) {
                console.log(e);
            }
        },
        async getMember() {
            try {
                const response = await this.$axios.$get(
                    `/members?project_id=${this.projectId}`
                )
                await this.getProfile()
                this.member = response.data.filter(member => member.email === this.user)[0].role;
            } catch (e) {
                console.log(e)
            }
        },
        // async getProjectid() {
        //     try {
        //         await this.getTestcase();
        //         const response = await this.$axios.$get(`/test_cases/?version_id=${this.projectId}`)
        //         console.log(response)
        //         this.items = response.data
        //     } catch (e) {
        //         console.log("error")
        //     }
        // },
        async getProfile() {
            try {
                const response = await this.$axios.$get('/profiles')
                this.user = response.data.email
            } catch (e) {
                console.log(e)
            }
        },
        async getScenario() {
            try {
                const response = await this.$axios.$get(`/scenarios/${this.scenarioId}`);
                console.log(response);
                this.scenario = response.data.name; // Update this line to access the scenario name correctly
            } catch (e) {
                console.log(e);
            }
        },
        showEdit() {
            this.isEditVisible = true
        },
        closeModal() {
            this.isEditVisible = false
        },
        showDelete() {
            this.isDeleteVisible = true
        },
        showProfile() {
      this.isProfileVisible = !this.isProfileVisible;
    },
        closeDelete() {
            this.isDeleteVisible = false
        }
    }
}
</script>
  
<style lang="scss" scoped></style>