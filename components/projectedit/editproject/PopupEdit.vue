<template>
  <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div class="flex">
        <h1 class="font-Montserrat font-bold text-2xl pr-[300px]">Edit Project</h1>
        <img src="../createproject/svg/CloseCircle.svg" class="cursor-pointer" @click="closeModal">
      </div>
      <hr class="border-gray-300 my-4 w-full">
      <form @submit.prevent="editProject">
        <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="project-name">
          Project Name
        </label>
        <input id="project-name" v-model="newItem.name"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" placeholder="Project Name" required>
        <div class="pt-[15px] relative">
          <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="platform">
            Platform
          </label>
          <div class="relative">
            <select id="platform" v-model="newItem.platform"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Platform">
              <option value="" disabled selected>Select a platform</option>
              <option value="mobile">Mobile</option>
              <option value="web">Web</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="pt-[15px] relative">
          <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="project-name">
            Testing Type
          </label>
          <div class="relative">
            <select id="project-name" v-model="newItem.type_test"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="" disabled selected>Select an option</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex pt-[70px] justify-between sm:pt-14">
          <button type="submit"
            class="ml-auto mr-[15px]bg-[#FFFFFF] font-['Montserrat'] text-[#554AF0] font-bold py-2 px-4 rounded border border-[#554AF0] hover:text-white hover:bg-red-500">
            Edit Item
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newItem: {
        name: '',
        id: '',
        type_test: 'Web',
        platform: 'Manual',
      },
    };
  },
  mounted() {
    // Assign the props values to the newItem object
    this.newItem.name = this.item.name;
    this.newItem.id = this.item.id;
    this.newItem.type_test = this.item.type_test;
    this.newItem.platform = this.item.platform;
  },
  methods: {
    closeModal() {
      this.$emit("closePopup");
    },
    submitForm() {
      this.$emit('submit', this.newItem);

      this.newItem = {
        name: '',
        id: '',
        type_test: 'Web',
        platform: 'Manual',
      };
    },
    async editProject() {
      try {
        const response = await this.$axios.$put(`/projects/${this.newItem.id}`, {
          name: this.newItem.name,
          platform: this.newItem.platform,
          type_test: this.newItem.type_test
        });
        console.log(response.data);
        // Handle success, such as displaying a success message or redirecting to another page

        // Emit an event to notify the parent component about the successful edit
        this.$emit('projectEdited', response.data);

        // Reload the page after the edit is successful
        window.location.reload();
      } catch (error) {
        console.error(error);
        // Handle error, such as displaying an error message to the user
      }
    },
  },
};
</script>