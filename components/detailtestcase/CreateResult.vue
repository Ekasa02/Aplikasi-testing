<template>
  <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex sm:items-center sm:justify-center font-monserrat']">
    <div>
      <div class="bg-white rounded-lg shadow-lg">
        <div class="pt-4">
          <div class="flex">
            <h1 class="font-['Montserrat'] font-bold text-2xl sm:pr-[300px] pl-5">
              Add result
            </h1>
            <img src="./svg/CloseCircle.svg" class="pr-4 hover:cursor-pointer" @click="hideCreate" />
          </div>
          <hr class="border-gray-300 my-4 w-full" />
        </div>
        <div class="pl-5 pr-5">
          <div class="relative max-h-[60vh] overflow-y-auto">
            <form @submit.prevent="postResult">
              <div class="pt-[15px] relative">
                <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="Actually">Actually</label>
                <input v-model="form.actual" id="Actually"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Actually" required/>
              </div>
              <div class="pt-[15px] relative">
                <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="note">Note</label>
                <textarea v-model="form.note" id="note"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Note"></textarea>
              </div>
              <div class="pt-[15px] relative">
                <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="project-name">Result
                  state</label>
                <select id="project-name" v-model="form.status" required
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="" disabled selected>Result state</option>
                  <option value="pass">Pass</option>
                  <option value="fail">Fail</option>
                </select>
              </div>
              <div class="pt-[15px] relative">
                <select id="project-name" v-model="form.priority" required
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  :disabled="form.status === 'pass'">
                  <option value="" disabled selected>Priority</option>
                  <option value="urgent">Urgent</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div class="pt-[15px] relative">
                <select id="project-name" v-model="form.severity" required
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  :disabled="form.status === 'pass'">
                  <option value="" disabled selected>Severity</option>
                  <option value="critical">Critical</option>
                  <option value="major">Major</option>
                  <option value="minor">Minor</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div class="pt-[15px] font-['Montserrat']">
                <h1 class="block font-bold text-[14px] mb-2">Attachment</h1>
                <p class="pb-2">
                  Max file size is 2mb. Supported files are jpg, jpeg, png
                </p>
                <div class="rounded p-4" style="border: dashed 1px #c9c5c5">
                  <label for="input-file" class="cursor-pointer">
                    <input @change="handleFile($event)" id="input-file" type="file" accept="image/*" class="hidden" required/>
                    <img src="./svg/upload.svg" class="pl-56" />
                    <p class="pl-40 pt-2">Click to browse files</p>
                  </label>
                </div>
              </div>
              <div class="pt-4 pb-4">
                <div class="pt-9 pb-10">
                  <button class="font-['Montserrat'] text-white bg-[#554AF0] font-semibold py-2 px-5 rounded">
                    Save
                  </button>
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
    itemId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      form: {
        actual: '',
        note: '',
        status: '',
        priority: '',
        severity: '',
        img_url: '',
        test_case_id: '',
      },
      userId: '',
    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    handleFile(e) {
      this.form.img_url = e.target.files[0]
    },
    async postResult() {
      try {
        this.form.test_case_id = this.itemId
        const formData = new FormData()
        formData.append('actual', this.form.actual)
        formData.append('test_case_id', this.form.test_case_id)
        formData.append('note', this.form.note)
        formData.append('status', this.form.status)
        formData.append('priority', this.form.priority)
        formData.append('severity', this.form.severity)
        formData.append('img_url', this.form.img_url)
        formData.append('user_id', this.userId)
        const response = await this.$axios.$post('/results', formData)
        console.log(response)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    },
    hideCreate() {
      this.$emit('hideCreate')
    },
    async getProfile() {
      try {
        const response = await this.$axios.$get(`/profiles`);
        console.log(response);
        this.userId = response.data.id;
      } catch (e) {
        console.log(e);
      }
    },
  },
}
</script>
