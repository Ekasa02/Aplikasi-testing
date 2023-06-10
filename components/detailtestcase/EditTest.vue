<template>
    <div class="fixed inset-0 flex items-center justify-center font-Montserrat">
      <div class="bg-white p-8 rounded-lg shadow-lg w-[35%] max-h-[80vh] overflow-hidden">
        <div class="flex justify-between">
          <h1 class="font-bold text-2xl pr-12">Edit test case</h1>
          <img alt="Close Icon" src="../createversion/svg/CloseCircle.svg" class="cursor-pointer" @click="closeModal" />
        </div>
        <hr class="border-gray-300 my-4 w-full" />
        <div class="overflow-y-auto max-h-[60vh] pr-5">
          <!-- Your form content here -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        items: [] // Initialize items as an empty array
      };
    },
    mounted() {
      console.log(this.id); // Add this line to log the value of this.id
      this.getTestdata();
    },
    methods: {
      closeModal() {
        // Emit an event to notify the parent component to close the modal
        this.$emit("close-modal");
      },
      editProject() {
        // Perform the edit operation here
        // Emit an event to notify the parent component that editing is complete
        this.$emit("edit-complete");
      },
      showScenario() {
        // Perform action to show scenario
      },
      async getTestdata() {
        try {
          const response = await this.$axios.$get(`/test_cases/36`);
          console.log(response);
          this.items = response.data;
        } catch (e) {
          console.log(e);
        }
      },
    }
  };
  </script>
  