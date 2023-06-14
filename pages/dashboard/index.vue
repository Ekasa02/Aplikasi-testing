<template>
  <div class="font-montserrat">
    <div class="flex items-center justify-end py-[5px] pr-[10px] md:pr-[100px] border-b-[1px] border-gray-300">
      <div class="ml-auto">
        <DashboardProfile @showProfile="showProfile" />
      </div>
    </div>
    <div class="px-[10px] md:px-[100px]">
      <DashboardPopup v-if="isProfileVisible" />
      <DashboardTitle />
      <DashboardLevel :level="userRank" />
      <DashboardProject />
      <div class="flex justify-between" style="margin-top: 15px">
        <DashboardSearchproject @search-input="handleSearch" />
        <button class="bg-[#554AF0] hover:bg-blue-600 text-white font-bold md:py-[8.5px] py-2 px-2 md:px-8 rounded-[8px]"
          @click="showPopup">
          Create Project
        </button>
      </div>
    </div>
    <div style="padding: 20px 100px;" class="project md:px-[20px] md:py-[100px]">
      <DashboardTable :items="items" :search-value="searchValue" @createVersion="navigateTo" />
    </div>
    <DashboardNewproject v-if="isPopupVisible" @closePopup="closePopup" />
  </div>
</template>

<script>
import DashboardNewproject from '~/components/dashboard/DashboardNewproject.vue'
export default {
  components: {
    DashboardNewproject
  },
  layout: 'SidebarLayout',
  data() {
    return {
      isPopupVisible: false,
      isProfileVisible: false,
      searchValue: '',
      items: [],
      profileId: '',
      userRank: ''
    }
  },
  mounted() {
    this.getProject()
    this.getProfileid()
    setTimeout(() => {
      this.getAchievements()
    }, 1000);
  },
  methods: {
    handleSearch(value) {
      this.searchValue = value
    },
    navigateTo(path) {
      this.$router.push(path)
    },
    showPopup() {
      this.isPopupVisible = true
    },
    closePopup() {
      this.isPopupVisible = false
    },
    showProfile() {
      this.isProfileVisible = !this.isProfileVisible
    },
    createProject(project) {
      project.id = this.items.length + 1
      this.items.push(project)
    },
    async getProject() {
      try {
        const response = await this.$axios.$get('/projects')
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getProfileid() {
      try {
        const response = await this.$axios.$get('/profiles')
        this.profileId = response.data.id
      } catch (e) {
        console.log(e)
      }
    },
    async getAchievements() {
      try {
        const response = await this.$axios.$get(`achieve/?id=${this.profileId}`)
        this.userRank = response.rank.name
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style></style>
