<template>
  <div>
    <h1 class="font-bold py-8 leading-10 text-[32px]">Report</h1>
    <div class="grid  md:grid-cols-2 md:gap-8 overflow-x-auto">
      <div v-for="item in items" :key="item">
        <div class="bg-[#FFFFFF] rounded px-5">
          <div class="flex items-center gap-2 py-4">
            <div>
              <img src="../assets/version.svg" />
            </div>
            <div>
              <div class="flex gap-x-3 items-center">
                <p >{{ title }}</p>
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
        <div class="bg-white px-5 py-4 rounded">
          <div class="w-full bg-[#CDCBFC] rounded-lg flex items-center h-6 relative">
            <div class="h-6 bg-[#554AF0] rounded-lg"
              :style="{ width: calculateProgressBarWidth(item.test_case_pass_count, item.test_case_count, item.test_case_fail_count) }">
            </div>
            <span class="text-white font-medium absolute left-[290px]">
              {{ isNaN(item.test_case_pass_count / item.test_case_count) ? 0 : Math.round(((item.test_case_pass_count + item.test_case_fail_count) /
                item.test_case_count) * 100) }}
            </span>
          </div>
          <div class="flex gap-x-4 mt-2 text-lg text-gray-500">
            <p class="truncate py-1">Test case: {{ item.test_case_count }}</p>
            <p class="truncate py-1">Pass: <span class="text-[#2BE51A]">{{ item.test_case_pass_count }}</span></p>
            <p class="truncate py-1">Fail: <span class="text-[#FF0000]">{{ item.test_case_fail_count }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
        console.log(response)
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
    calculateProgressBarWidth(passCount, totalCount, failCount) {
      if (totalCount === 0) {
        return '0%';
      }
      const passRatio = ((passCount + failCount) / totalCount) * 100;
      return `${passRatio}%`;
    }
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
