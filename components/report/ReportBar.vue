<template>
  <div>
    <h1 class="font-bold py-8 leading-10 text-[32px]">Report</h1>
    <div class="grid grid-cols-2 gap-8 overflow-x-auto">
      <div v-for="item in items" :key="item">
        <div class="bg-[#FFFFFF] rounded px-5">
          <div class="flex items-center gap-2 py-3">
            <div>
              <img src="../assets/version.svg" />
            </div>
            <div>
              <div class="flex gap-1">
                <p>{{ title }}</p>
                <div v-if="platform === 'mobile'">
                  <img src="../assets/ReportMobile.svg" />
                </div>
                <div v-if="platform === 'web'">
                  <img src="../assets/ReportWeb.svg" />
                </div>
                <div v-if="type_test === 'manual'">
                  <p class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2">Manual</p>
                </div>
                <div v-if="type_test === 'automatic'">
                  <p class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2">Automatic</p>
                </div>
              </div>
              <h1 class="font-bold">{{ item.version_name }}</h1>
            </div>
          </div>
        </div>
        <div class="bg-white px-5 py-5 rounded">
          <div class="w-full bg-[#CDCBFC] rounded-lg">
            <div class="h-4 bg-[#554AF0] rounded-lg" style="width: 50%"></div>
          </div>
          <p class="truncate py-1">Test case.............................{{ item.test_case_count }}</p>
          <p class="truncate py-1">Pass...................................{{ item.test_case_pass_count }}</p>
          <p class="truncate py-1">Fail...................................{{ item.test_case_fail_count }}</p>
        </div>
      </div>
      <!-- <div>
        <div class="bg-[#FFFFFF] rounded px-5">
          <div class="flex items-center gap-2 py-3">
            <div>
              <img src="../assets/version.svg" />
            </div>
            <div>
              <div class="flex gap-1">
                <p>Logibug</p>
                <img src="../assets/ReportWeb.svg" />
                <p class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2">
                  Manual
                </p>
              </div>
              <h1 class="font-bold">Testing version 1</h1>
            </div>
          </div>
        </div>
        <div class="bg-white px-5 py-5 rounded">
          <div class="w-full bg-[#CDCBFC] rounded-lg">
            <div class="h-4 bg-[#554AF0] rounded-lg" style="width: 50%"></div>
          </div>
          <p class="truncate py-1">Test case.............................100</p>
          <p class="truncate py-1">Pass...................................50</p>
          <p class="truncate py-1">Fail...................................40</p>
        </div>
      </div>
      <div>
        <div class="bg-[#FFFFFF] rounded px-5">
          <div class="flex items-center gap-2 py-3">
            <div>
              <img src="../assets/version.svg" />
            </div>
            <div>
              <div class="flex gap-1">
                <p>Logibug</p>
                <img src="../assets/ReportMobile.svg" />
                <p class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2">
                  Manual
                </p>
              </div>
              <h1 class="font-bold">Testing version 1</h1>
            </div>
          </div>
        </div>
        <div class="bg-white px-5 py-5 rounded">
          <div class="w-full bg-[#CDCBFC] rounded-lg">
            <div class="h-4 bg-[#554AF0] rounded-lg" style="width: 50%"></div>
          </div>
          <p class="truncate py-1">Test case.............................100</p>
          <p class="truncate py-1">Pass...................................50</p>
          <p class="truncate py-1">Fail...................................40</p>
        </div> -->
    </div>
  </div>
</div></template>
<script>
export default {
  props: {
    projectId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      items: [],
      title: '',
      platform: '',
      type_test: ''
    }
  },
  mounted() {
    this.fetchReport()
    this.getProject()
  },
  methods: {
    async fetchReport() {
      try {
        const response = await this.$axios.$get(`/report/${this.projectId}`);
        this.items = response.data.versions
        this.title = response.data.project_name
        // console.log(this.items)
      } catch (e) {
        // console.log(e);
      }
    },
    async getProject() {
      try {
        const response = await this.$axios.$get('/projects')
        this.platform = response.data.filter(item => item.id === parseInt(this.projectId))[0].platform
        this.type_test = response.data.filter(item => item.id === parseInt(this.projectId))[0].type_test
      } catch (e) {
        // console.log(e)
      }
    },
  }
}
</script>
<style>
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
