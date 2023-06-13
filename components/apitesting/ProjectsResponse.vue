<template>
  <div class="py-5 px-5 items-center justify-end">
    <div class="flex font-montserrat justify-between">
      <h1 class="font-bold text-[32px] leading-10">{{ versionName }}</h1>
      <div class="ml-auto">
        <button
          class="flex float-right font-montserrat bg-[#554AF0] text-white font-semibold py-2 px-5 rounded items-center gap-x-3"
          @click="runGetResultForItems">
          <img src="../assets/Run.svg" />
          Run
        </button>
      </div>
    </div>
    <p class="py-4">6 Request</p>
    <div v-for="item in items" :key="item.id" class="flex py-4 justify-between">
      <div class="flex">
        <button :class="getButtonClass(item.method) + ' btn-size'"
          class="font-montserrat text-white font-semibold rounded">
          {{ item.method }}
        </button>
        <div class="pl-2 font-montserrat">
          <p>{{ item.folder_name }}</p>
          <h1 class="font-medium">{{ item.req_name }}</h1>
        </div>
      </div>
      <div v-if="item.responseTrue" float-right>
        <h1 class="bg-red-100">{{ item.data }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'SidebarLayout',
  props: {
    versionName: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    versionId: {
      type: Number,
      required: true
    }
  },
  mounted() {
    // this.runGetResultForItems()
  },
  methods: {
    getButtonClass(method) {
      switch (method) {
        case 'POST':
          return 'bg-[#22B814]';
        case 'DELETE':
          return 'bg-[#CC0000]';
        case 'PUT':
          return 'bg-[#FF9933]';
        case 'GET':
          return 'bg-[#4DAEFF]';
        default:
          return '';
      }
    },
    async runGetResultForItems() {
      for (const item of this.items) {
        try {
          const response = await this.$axios.$get(`/automatic/run/${item.version_id}/${item.id}`);
          console.log(response);
          item.data = response.data.response.code;
          item.responseTrue = true;
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
}
</script>

<style>
.btn-size {
  width: 80px;
  height: 40px;
}
</style>