<template>
  <div class="max-h-[70vh] overflow-y-auto">
    <ul class="list-group h-full mt-[40px]">
      <li class="list-group-item" v-for="item in items" :key="item.id" @click="toDetailTest(item.version_id)">
        <div class="border-b border-gray-200 pb-[10px] flex gap-x-5 mb-[10px] cursor-pointer">
          <div class="w-3 h-[70px] rounded-xl" :class="getCategoryColor(item.test_category)"></div>
          <div>
            <h1 class="font-semibold text-xl">{{ item.testcase }}</h1>
            <div class="flex mt-2 gap-x-2">
              <div class="bg-indigo-800 px-3 py-1 rounded-xl text-white">{{ item.scenario_name ||
                getScenarioName(item.scenario_id) }}</div>
              <div class="bg-yellow-400 px-3 py-1 rounded-xl text-white">{{ item.test_category }}</div>
            </div>
          </div>
          <div v-if="role !== 'dev'" class="flex gap-x-3 items-center ml-auto">
            <button @click="deletePopup(item.id); $event.stopPropagation()">
              <img src="./svg/Delete.svg" alt="Delete Icon" class="h-[20px] w-[20px]">
            </button>
            <button @click="editPopup(item); $event.stopPropagation()">
              <img src="./svg/Edit.svg" alt="Edit Icon" class="h-[20px] w-[20px]">
            </button>
          </div>
        </div>
      </li>
    </ul>
    <TestEdit v-if="isEditVisible" :id="id" :item="selectedItem" :project-id="projectId" @closePopup="closePopup" />
    <TestDelete v-if="isDeleteVisible" :item-id="deleteItemId" @closeDelete="closeDelete" />
  </div>
</template>

<script>
import TestEdit from './TestEdit.vue';
import TestDelete from './TestDelete.vue';

export default {
  components: {
    TestEdit,
    TestDelete
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    projectId: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      isEditVisible: false,
      isDeleteVisible: false,
      selectedItem: null,
      id: '',
      deleteItemId: null,
      scenarioMap: {} // Map to store scenario names
    };
  },
  computed: {
    getScenarioName() {
      return (scenarioId) => {
        if (!this.scenarioMap[scenarioId]) {
          this.fetchScenarioName(scenarioId);
        }
        return this.scenarioMap[scenarioId] || ''; // Return scenario name from the map or empty string
      };
    }
  },
  methods: {
    getCategoryColor(category) {
      if (category === "positif") {
        return "bg-green-500";
      } else if (category === "negatif") {
        return "bg-red-500";
      } else {
        return "bg-gray-300";
      }
    },
    async fetchScenarioName(scenarioId) {
      try {
        const response = await this.$axios.$get(`/scenarios/${scenarioId}`);
        this.$set(this.scenarioMap, scenarioId, response.data.name);
      } catch (e) {
        console.log(e);
      }
    },
    editPopup(item) {
      this.selectedItem = item;
      this.id = item.id;
      this.isEditVisible = true;
    },
    closePopup() {
      this.isEditVisible = false;
    },
    deletePopup(id) {
      this.deleteItemId = id;
      this.isDeleteVisible = true;
    },
    closeDelete() {
      this.isDeleteVisible = false;
    },
    toDetailTest(id) {
      this.$router.push(`/detailtest/${id}`);
    }
  },
};
</script>
