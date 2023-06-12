<template>
  <div v-if="itemId !== ''">
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
        <h1 class="mt-4 font-semibold text-xl">Actually</h1>
        <h1>{{ items.actual }}</h1>
        <h1 class="mt-4 font-semibold text-xl">Status</h1>
        <div class="flex gap-x-3 text-white">
          <div class="px-[32.5px] py-[2px] bg-red-600 rounded-lg">
            <p>{{ items.status }}</p>
          </div>
          <div class="px-[32.5px] py-[2px] bg-[#FFB366] rounded-lg">
            <p>{{ items.priority }}</p>
          </div>
          <div class="px-[32.5px] py-[2px] bg-[#B600C9] rounded-lg">
            <p>{{ items.severity }}</p>
          </div>
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
      type: String,
      required: true
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
    this.getResult();
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
      } catch (e) {
        console.log(e);
        this.items = [];
      }
    }
  },
};
</script>