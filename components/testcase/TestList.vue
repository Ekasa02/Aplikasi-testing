<template>
  <div class="max-h-[70vh] overflow-y-auto">
    <ul class="list-group h-full mt-[40px]">
      <li class="list-group-item" v-for="(item) in DataFiltered" :key="item.id" @click="toDetailTest(item.id)">
        <div class="border-b border-gray-200 pb-[10px] flex gap-x-5 mb-[10px] cursor-pointer">
          <div class="w-3 h-[70px] rounded-xl" :class="getCategoryColor(item.status)"></div>
          <div>
            <h1 class="font-semibold text-xl">{{ item.testcase }}</h1>
            <div class="flex mt-2 gap-x-2">
              <div class="bg-[#8787F8] px-3 py-1 rounded-xl text-white">{{ item.scenario_name ||
                getScenarioName(item.scenario_id) }}</div>
              <div class="bg-[#22B814] px-3 py-1 rounded-xl text-white" v-if="item.status === 'pass'">
                {{ item.status || getScenarioName(item.scenario_id) }}
              </div>
              <!-- <div class="bg-[#FF3333] px-3 py-1 rounded-xl text-white" v-else>
                {{ item.status || getScenarioName(item.scenario_id) }}
              </div> -->
              <div v-if="item.status === 'fail'" class="px-3 py-1 rounded-xl text-white" :class="{
                'bg-[#FFE082]': item.priority === 'low',
                'bg-[#FFA500]': item.priority === 'medium',
                'bg-[#FF4500]': item.priority === 'high',
                'bg-[#831515]': item.priority === 'urgent',
              }">
                {{ item.priority || getScenarioName(item.scenario_id) }}
              </div>
              <div v-if="item.status === 'fail'" class="bg-[#FF3333] px-3 py-1 rounded-xl text-white" :class="{
                'bg-[#B600C9]': item.severity === 'critical',
                'bg-[#F04AE5]': item.severity === 'major',
                'bg-[#F9BAF3]': item.severity === 'minor',
              }">{{ item.severity ||
  getScenarioName(item.scenario_id) }}</div>
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
    <TestEdit v-if="isEditVisible" :item-id="itemId" :project-id="projectId" @closeModal="closeModal" />
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
    filter: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      isEditVisible: false,
      isDeleteVisible: false,
      selectedItem: null,
      id: '',
      deleteItemId: null,
      itemId: '',
      scenarioMap: {}
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
    },
    DataFiltered(){
      if(this.filter.length > 0) {
        const arrayFilter = this.filter.map((e)=> e.name) 
      return this.items.filter((obj)=> {
          return arrayFilter.includes(obj.scenario_name)
      });
      } else {
        return this.items
      }
    },
    filteredItems() {
      return this.items.filter(item => this.filter.some(filterItem => filterItem.id === item.scenario_id));
    }
  },
  methods: {
    getCategoryColor(category) {
      if (category === "pass") {
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
        const scenarioData = response.data;
        this.$set(this.scenarioMap, scenarioId, {
          name: scenarioData.name,
          status: scenarioData.status,
          priority: scenarioData.priority,
          severity: scenarioData.severity
        });
      } catch (e) {
        // console.log(e);
      }
    },
    editPopup(item) {
      this.selectedItem = item;
      this.itemId = item.id;
      this.isEditVisible = true;
    },
    closeModal() {
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
