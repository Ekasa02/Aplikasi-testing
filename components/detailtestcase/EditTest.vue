<template>
    <div class="fixed inset-0 flex items-center justify-center font-Montserrat">
      <div class="bg-white p-8 rounded-lg shadow-lg w-[35%] max-h-[80vh] overflow-hidden">
        <div class="flex justify-between">
          <h1 class="font-bold text-2xl pr-12">Edit test case</h1>
          <img alt="Close Icon" src="../createversion/svg/CloseCircle.svg" class="cursor-pointer" @click="closeModal" />
        </div>
        <hr class="border-gray-300 my-4 w-full" />
        <div class="overflow-y-auto max-h-[60vh] pr-5">
          <form @submit.prevent="editProject">
            <div class="relative">
              <label class="block font-bold text-[14px] mb-2" for="testcase">
                Test case
              </label>
              <input id="testcase" v-model="editedItem.testcase"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Test case" />
            </div>
            <div class="relative pt-[15px]">
              <label class="block font-Montserrat font-bold text-[14px] mb-2" for="scenario">
                Scenario
              </label>
              <div class="flex items-center">
                <select id="scenario"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="editedItem.scenario_id">
                  <option value="" disabled>Select Scenario</option>
                  <option v-for="scenarioItem in scenario" :value="scenarioItem.id" :key="scenarioItem.id">
                    {{ scenarioItem.name }}
                  </option>
                </select>
                <div class="hover:opacity-80 text-white font-bold py-2 px-2.5 rounded-xl ml-3 border border-gray-300"
                  @click="showScenario">
                  <img src="./svg/Plus.svg" alt="Plus Icon" class="h-5 w-5" />
                </div>
              </div>
            </div>
            <div class="pt-[15px] relative">
              <label class="block font-bold text-[14px] mb-2" for="test-category">
                Test category
              </label>
              <div class="flex items-center">
                <select id="test-category" v-model="editedItem.test_category"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="" disabled selected>Test category</option>
                  <option value="positif">Positive</option>
                  <option value="negatif">Negative</option>
                </select>
              </div>
            </div>
            <div class="pt-[15px] relative">
              <label class="block font-bold text-[14px] mb-2" for="pre-condition">
                Pre condition
              </label>
              <input id="pre-condition" v-model="editedItem.pre_condition"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Pre condition" />
            </div>
            <div class="pt-[15px] relative">
              <label class="block font-bold text-[14px] mb-2" for="test-step">
                Test steps
              </label>
              <textarea id="test-step" v-model="editedItem.test_step"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4" placeholder="Steps"></textarea>
            </div>
            <div class="pt-[15px] relative">
              <label class="block font-bold text-[14px] mb-2" for="expectation">
                Expectation
              </label>
              <input id="expectation" v-model="editedItem.expectation"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Expectation" />
            </div>
            <div class="pt-[50px]">
              <button class="bg-[#554AF0] text-white font-bold py-2 px-4 rounded" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      <TestScenario v-if="isScenarioVisible" :id="id" @hideScenario="hideScenario" />
    </div>
  </template>
  
  <script>
  import TestScenario from './TestScenario.vue'
  export default {
    components: { TestScenario },
    props: {
      item: {
        type: Object,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
      projectId: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        isScenarioVisible: false,
        editedItem: {
          testcase: '',
          pre_condition: '',
          test_step: '',
          expectation: '',
          scenario: []
        },
      }
    },
    mounted() {
      this.editedItem.testcase = this.item.testcase
      this.editedItem.pre_condition = this.item.pre_condition
      this.editedItem.test_step = this.item.test_step
      this.editedItem.expectation = this.item.expectation
      this.editedItem.test_category = this.item.test_category
      this.getScenario()
    },
    methods: {
      showScenario() {
        this.isScenarioVisible = true
      },
      hideScenario() {
        this.isScenarioVisible = false
      },
      closeModal() {
        this.$emit('closePopup')
      },
      async getScenario() {
        try {
          const response = await this.$axios.$get(`/scenarios/?project_id=${this.projectId}`);
          console.log(response);
          this.scenario = response.data;
        } catch (e) {
          console.log(e);
        }
      },
      async editProject() {
        try {
          const response = await this.$axios.$put(`/projects/${this.id}`, {
            pre_condition: this.editedItem.pre_condition,
            testcase: this.editedItem.testcase,
            test_step: this.editedItem.test_step,
            expectation: this.editedItem.expectation,
          })
          console.log(response.data)
          window.location.reload()
        } catch (error) {
          console.error(error)
        }
      },
    },
  }
  </script>
  