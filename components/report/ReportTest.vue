<template>
  <div class="justify-between items-center">
    <h1 class="font-bold py-8 leading-10 text-[32px]">Report</h1>
    <div v-for="item in items" :key="item.id">
      <div v-if="item.type_test === 'manual'">
        <div class="flex gap-2 font-montserrat py-4 items-center justify-center hover:cursor-pointer" @click="projectDetails(item.id)">
          <div v-if="item.platform === 'mobile'">
            <img src="../assets/mobile.svg" />
          </div>
          <div v-if="item.platform === 'web'">
            <img src="../assets/website.svg" />
          </div>
          <h1 class="font-bold">{{ item.name }}</h1>
          <p class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2">
            Manual
          </p>
          <div class="ml-auto">
            <img src="../assets/clickKanan.svg" class="float-right" />
          </div>
        </div>
      </div>
      <!-- <div v-if="item.type_test === 'automatic'">
        <div class="flex gap-2 font-montserrat py-4 items-center justify-center hover:cursor-pointer" @click="projectDetails(item.id)">
          <img src="../assets/API.svg" />
          <h1 class="font-bold">{{ item.name }}</h1>
          <p class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2">
            API
          </p>
          <div class="ml-auto">
            <img src="../assets/clickKanan.svg" class="float-right" />
          </div>
        </div>
      </div>
      <hr class="pb-3 border-gray-200" /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  methods: {
    projectDetails(id){
      this.$router.push(`/reportbar/${id}`)
    }
  }
}
</script>

<style></style>
