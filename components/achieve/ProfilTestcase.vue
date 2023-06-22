<template>
  <div class="pt-5 px-2 md:px-4 w-[100%] h-[100%] md:w-[100%] md:h-[100%] font-montserrat">
    <div class="bg-[#6352E2] rounded px-5">
      <div class="flex items-center gap-4 py-3">
        <div>
          <img src="../assets/crown.svg" />
        </div>
        <div>
          <p class="text-[#FAFAFA] text-lg">{{ userAchieve.user }}</p>
          <h1 class="font-bold text-[#FAFAFA] text-3xl">{{ userAchieve.rank.name }}</h1>
        </div>
      </div>
    </div>
    <div class="bg-white px-5 py-5 rounded">
      <p class="pb-3 font-medium text-lg">{{ userAchieve.testcase_count }} Scenario</p>
      <div class="w-full bg-[#CDCBFC] rounded-lg">
        <div class="h-4 bg-[#554AF0] rounded-lg"
          :style="{ width: `${(userAchieve.testcase_count / (userAchieve.testcase_count + userAchieve.rank.range_difference)) * 100}%` }">
        </div>
      </div>
      <p class="pt-3 font-medium">
        <template v-if="userAchieve.rank.name === 'Beginner'">
          {{ userAchieve.rank.range_difference }} more scenarios to reach <span class="text-[#4DAEFF]">intermediate</span> level
        </template>
        <template v-else-if="userAchieve.rank.name === 'Intermediate'">
          {{ userAchieve.rank.range_difference }} more test cases to reach <span class="text-[#FCC42E]">advanced</span> level
        </template>
        <template v-else-if="userAchieve.rank.name === 'Advanced'">
          {{ userAchieve.rank.range_difference }} more test cases to reach <span class="text-[#9747FF]">mastery</span> level
        </template>
        <template v-else-if="userAchieve.rank.name === 'Mastery'">
          You have reached the highest level
        </template>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileId: '',
      userAchieve: {
        rank:{
          name: ''
        }
      }
    }
  },
  mounted() {
    this.getProfileid()
  },
  methods: {
    async getProfileid() {
      try {
        const response = await this.$axios.$get('/profiles')
        this.profileId = response.data.id
        await this.getAchievements()
      } catch (e) {
        console.log(e)
      }
    },
    async getAchievements() {
      try {
        const response = await this.$axios.$get(`achieve/?id=${this.profileId}`)
        this.userAchieve = response
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
