<template>
  <div class="py-5 px-5 items-center justify-end">
    <div class="flex font-montserrat justify-between">
      <h1 class="font-bold text-[32px] leading-10">{{ versionName }}</h1>
      <div class="ml-auto">
        <button
          class="flex float-right font-montserrat bg-[#554AF0] text-white font-semibold py-2 px-5 rounded items-center gap-x-3"
          @click="displayResult">
          <img src="../assets/Run.svg" />
          Run
        </button>
      </div>
    </div>
    <p class="py-4">{{items.length}} Request</p>
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
      <div v-if="getResult"> 
        <h1 v-if="item.data < 300" class="text-[#22B814]">{{ item.data }}</h1>
        <h1 v-if="item.data >= 400" class="text-[#CC0000]">{{ item.data }}</h1>
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
  data() {
    return {
      getResult: false,
    };
  },
  mounted() {
    this.runGetResultForItems()
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
    getTextColor(data) {
      switch (data) {
        case 200:
          return 'text-green-500';
        case 500:
          return 'text-red-500';
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
    },
    displayResult() {
      this.getResult = true
      this.runGetResultForItems()
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