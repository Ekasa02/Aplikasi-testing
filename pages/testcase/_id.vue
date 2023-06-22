<template>
  <div class="font-montserrat">
    <TestHeader @showProfile="showProfile" />
    <DashboardPopup v-if="isProfileVisible" />
    <div class="px-[30px] md:px-[100px] py-[20px] md:py-[50px]">
      <div class="flex justify-between">
        <div>
          <div class="flex gap-x-3 items-center">
            <h1 class="text-3xl font-bold">{{ testName }}</h1>
            <!-- <img src="../.././components/assets/Ellipsis.svg" alt="Test Icon" class="h-[25px] w-[25px]"> -->
            <button @click="showFilter">
              <img src="../../components/assets/Filter.svg" alt="Test Icon" class="h-[25px] w-[25px]">
            </button>
          </div>
        </div>
        <button class="bg-[#554AF0] text-white font-normal md:font-bold py-2 px-2 md:px-4 rounded" @click="showCreate">
          Create test case
        </button>
      </div>
      <TestList :items="items" :project-id="projectId" :role="member" :filter="filter" />
    </div>
    <TestCreate v-if="isCreateVisible" :id="id" :project-id="projectId" @hideCreate="hideCreate" />
    <TestFilter v-if="isFilterVisible" :project-id="projectId" @hideFilter="hideFilter" @filterItems="handleFilterItems"/>
  </div>
</template>

<script>
import TestHeader from '../../components/testcase/TestHeader.vue'
import TestList from '../../components/testcase/TestList.vue'
import TestCreate from '../../components/testcase/TestCreate.vue'
import DashboardPopup from '../../components/dashboard/DashboardPopup.vue'
import TestFilter from '~/components/testcase/TestFilter.vue'

export default {
  components: { TestHeader, TestList, TestCreate, DashboardPopup, TestFilter },
  layout: 'SidebarLayout',
  data() {
    return {
      isCreateVisible: false,
      isProfileVisible: false,
      isFilterVisible: false,
      id: this.$route.params.id,
      items: [],
      filter: [],
      projectId: '',
      member: '',
      testName: '',
    }
  },
  mounted() {
    this.getProjectid()
    this.getMember()
  },
  methods: {
    showCreate() {
      this.isCreateVisible = true
    },
    hideCreate() {
      this.isCreateVisible = false
    },
    showFilter() {
      this.isFilterVisible = true
    },
    hideFilter() {
      this.isFilterVisible = false
    },
    showProfile() {
      this.isProfileVisible = !this.isProfileVisible
    },
    async getTestcase() {
      try {
        const response = await this.$axios.$get(`/versions/${this.id}`)
        // console.log(response)
        this.projectId = response.data[0].project_id
        this.testName = response.data[0].name
        // console.log(this.projectId)
      } catch (e) {
        // console.log(e)
      }
    },
    async getMember() {
      try {
        const response = await this.$axios.$get(
          `/members?project_id=${this.id}`
        )
        await this.getProfile()
        this.member = response.data.filter(
          (member) => member.email === this.user
        )[0].role
      } catch (e) {
        // console.log(e)
      }
    },
    async getProjectid() {
      try {
        await this.getTestcase()
        const response = await this.$axios.$get(
          `/test_cases/?version_id=${this.id}`
        )
        // console.log(response)
        this.items = response.data
      } catch (e) {
        // console.log('error')
      }
    },
    async getProfile() {
      try {
        const response = await this.$axios.$get('/profiles')
        this.user = response.data.email
      } catch (e) {
        // console.log(e)
      }
    },
    handleFilterItems(activeItemsData) {
      // Handle the emitted data here
      // console.log(activeItemsData);
      this.filter = activeItemsData
    }
  },
}
</script>

<style lang="scss" scoped></style>
