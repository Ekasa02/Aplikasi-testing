<template>
  <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex sm:items-center sm:justify-center font-montserrat">
    <div>
      <div class="bg-white rounded-lg shadow-lg">
        <div class="pt-4">
          <div class="flex">
            <h1 class="font-montserrat font-bold text-2xl sm:pr-[300px] pl-5">Edit result</h1>
            <img src="./svg/CloseCircle.svg" class="pr-4" @click="hideEdit" />
          </div>
          <hr class="border-gray-300 my-4 w-full" />
        </div>
        <div class="pl-5 pr-5">
          <div class="relative max-h-[60vh] overflow-y-auto">
            <form @submit.prevent="updateResult">
              <div class="pt-[15px] relative">
                <label class="block font-montserrat font-bold text-[14px] mb-2" for="Actually">Actually</label>
                <input v-model="editedActual" id="Actually"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Actually" />
              </div>
              <div class="pt-[15px] relative">
                <label class="block font-montserrat font-bold text-[14px] mb-2" for="note">Note</label>
                <textarea v-model="editedNote" id="note"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Note"></textarea>
              </div>
              <div class="pt-[15px] relative">
                <label class="block font-montserrat font-bold text-[14px] mb-2" for="project-name">Result
                  state</label>
                <select id="project-name" v-model="editedStatus" required
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="" disabled selected>Result state</option>
                  <option value="pass">Pass</option>
                  <option value="fail">Fail</option>
                </select>
              </div>
              <div class="pt-[15px] relative">
                <select id="project-name" v-model="editedPriority" required
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  :disabled="editedStatus === 'pass'">
                  <option value="" disabled selected>Priority</option>
                  <option value="urgent">Urgent</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div class="pt-[15px] relative">
                <select id="project-name" v-model="editedSeverity" required
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  :disabled="editedStatus === 'pass'">
                  <option value="" disabled selected>Severity</option>
                  <option value="critical">Critical</option>
                  <option value="major">Major</option>
                  <option value="minor">Minor</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div class="pt-[15px] font-montserrat">
                <h1 class="block font-bold text-[14px] mb-2">Attachment</h1>
                <p class="pb-2">Max file size is 2mb. Supported files are jpg, jpeg, png</p>
                <div class="rounded p-4" style="border: dashed 1px #c9c5c5">
                  <label for="input-file" class="cursor-pointer">
                    <input @change="handleFile($event)" id="input-file" type="file" accept="image/*" class="hidden" />
                    <img src="./svg/upload.svg" class="pl-56" />
                    <p class="pl-40 pt-2">Click to browse files</p>
                  </label>
                </div>
              </div>
              <div class="pt-4 pb-4">
                <div class="pt-9 pb-10">
                  <button class="font-montserrat text-white bg-[#554AF0] font-semibold py-2 px-5 rounded">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      editedActual: '',
      editedNote: '',
      editedStatus: '',
      editedPriority: '',
      editedSeverity: ''
    };
  },
  mounted() {
    const item = this.items;
    this.editedActual = item.actual;
    this.editedNote = item.note;
    this.editedStatus = item.status;
    this.editedPriority = item.priority;
    this.editedSeverity = item.severity;
  },
  methods: {
    handleFile(e) {
      // Handle file upload
    },
    async updateResult() {
      try {
        const updatedItem = {
          id: this.items.id,
        };
        const response = await this.$axios.$put(`/results/${updatedItem.id}`, updatedItem);
        console.log(response);
        // window.location.reload(); // Force refresh the page
      } catch (error) {
        console.log(error);
      }
    },
    hideEdit() {
      this.$emit("hideEdit");
    }
  }
};
</script>
