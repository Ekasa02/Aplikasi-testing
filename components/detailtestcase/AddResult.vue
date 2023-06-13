<template>
  <div v-if="itemId !== ''" class="font-montserrat">
    <div v-if="!result" class="bg-white w-[75%] min-h-[60vh] rounded-lg shadow-lg px-8 py-8 float-right mt-5">
      <div class="ml-auto">
        <h1 class="font-bold text-2xl">Result</h1>
        <p class="pt-3 text-sm text-[#6A6D71]">No results yet</p>
        <div v-if="role !== 'dev'" class="pt-2">
          <button class="font-montserrat w-[100%] bg-[#554AF0] text-white font-bold py-2 px-4 rounded"
            @click="showCreate">
            Add result
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="rounded-[20px] border border-[#B3B3B3] px-[40px] py-[20px] overflow-y-auto max-h-[65vh]">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-2xl">Result</h1>
          <button @click="showEdit">
            <img src="./svg/Edit.svg" class="h-[18px] w-[18px]" alt="" />
          </button>
        </div>
        <h1 class="mt-4 font-semibold text-xl">Tester</h1>
        <h1>{{ items.user_name }}</h1>
        <h1 class="mt-4 font-semibold text-xl">Actually</h1>
        <h1>{{ items.actual }}</h1>
        <h1 class="mt-4 font-semibold text-xl">Status</h1>
        <div class="flex gap-x-3 text-white">
          <div class="bg-[#22B814] px-3 py-1 rounded-xl text-white" v-if="items.status === 'pass'">
                {{ items.status }}
              </div>
              <!-- <div class="bg-[#FF3333] px-3 py-1 rounded-xl text-white" v-else>
                {{ item.status || getScenarioName(item.scenario_id) }}
              </div> -->
              <div v-if="items.status === 'fail'" class="px-3 py-1 rounded-xl text-white" :class="{
                'bg-[#FFE082]': items.priority === 'low',
                'bg-[#FFA500]': items.priority === 'medium',
                'bg-[#FF4500]': items.priority === 'high',
                'bg-[#831515]': items.priority === 'urgent',
              }">
                {{ items.priority }}
              </div>
              <div v-if=" items.status === 'fail' " class="bg-[#FF3333] px-3 py-1 rounded-xl text-white" :class="{
                'bg-[#B600C9]': items.severity === 'critical',
                'bg-[#F04AE5]': items.severity === 'major',
                'bg-[#F9BAF3]': items.severity === 'minor',
              }">{{ items.severity }}</div>
            </div>
        <h1 class="mt-4 font-semibold text-xl">Note</h1>
        <p>{{ items.note }}</p>
        <h1 class="mt-4 font-semibold text-xl">Attachment</h1>
        <img :src="items.img_url" alt="" />
      </div>
    </div>
    <CreateResult v-if="isCreateVisible" :item-id="itemId" @hideCreate="hideCreate" />
    <EditResult v-if="isEditVisible" :items="items" @hideEdit="hideEdit" />
  </div>
</template>

<script>
import CreateResult from './CreateResult.vue';
import EditResult from './EditResult.vue';

export default {
  components: {
    CreateResult,
    EditResult
  },
  props: {
    itemId: {
      type: [String, Number],
      required: true,
      default: null
    },
    role: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isCreateVisible: false,
      isEditVisible: false,
      result: false,
      items: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.getResult();
    }, 500);
  },
  methods: {
    showCreate() {
      this.isCreateVisible = true;
    },
    hideCreate() {
      this.isCreateVisible = false;
    },
    showEdit() {
      this.isEditVisible = true;
    },
    hideEdit() {
      this.isEditVisible = false;
    },
    async getResult() {
      try {
        const response = await this.$axios.$get(`/results?test_case_id=${this.itemId}`);
        console.log(response);
        this.items = response.data;
        this.result = true
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>