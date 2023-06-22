<template>
  <div class="py-8">
    <div class="flex justify-between">
      <h1 class="font-bold text-[16px] leading-6">Profile picture</h1>
      <button
        class="py-2 px-5 text-white bg-red-500 rounded"
        @click="openDelete"
      >
        Delete Account
      </button>
    </div>
    <div class="flex items-center gap-x-12 mt-3">
      <div class="">
        <img v-if="!getPhoto" :src="items?.img_url" class="w-[110px] h-[110px] rounded-full" alt="Profile Picture">
        <img v-if="getPhoto" :src="getPhoto" class="w-[110px] h-[110px] rounded-full" alt="Profile Picture">
      </div>
      <div class="">
        <p>Maximum photo size is 1 MB</p>
        <button-select @file="handleFile" />
      </div>
    </div>
    <div v-if="items?.email" class="pt-6">
      <label
        class="block font-['Montserrat'] font-bold text-[14px] mb-2"
        for="email-member"
      >
        Email
      </label>
      <input
        v-model="email"
        id="email-member"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        placeholder="Email"
        :disabled="true"
      />
    </div>
    <div v-if="items?.name" class="pt-7">
      <label
        class="block font-['Montserrat'] font-bold text-[14px] mb-2"
        for="project-name"
      >
        Name
      </label>
      <input
        v-model="name"
        id="name"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Name"
      />
    </div>
    <div class="md:pt-9 mt-6 w-full">
      <button
        class="font-['Montserrat'] text-white bg-[#554AF0] font-semibold py-2 px-5 rounded"
        @click="updateData"
      >
        Save
      </button>
    </div>
    <DeleteProfile v-if="isDeleteOpen" @closeDelete="closeDelete" />
  </div>
</template>

<script>
import ButtonSelect from '../profil/ButtonSelect.vue'
import DeleteProfile from './DeleteProfile.vue'

export default {
  components: {
    ButtonSelect,
    DeleteProfile,
  },
  data() {
    return {
      items: null,
      imageFile: null,
      name: '',
      preview: null,
      email: '',
      isDeleteOpen: false,
    }
  },
  computed: {
    getPhoto() {
      if (!this.items) return ''
      return this.preview ? this.preview : this.items.img_url
    },
  },
  watch: {
    items() {
      if (this.items) {
        this.name = this.items.name
        this.email = this.items.email
      }
    },
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    async getProfile() {
      try {
        const response = await this.$axios.$get('/profiles')
        this.items = response.data
        // console.log('tess')
        // this.items = response.data
        // console.log('xx'+ items)
      } catch (e) {
        console.log(e)
      }
    },
    handleFile(file) {
      this.preview = file.base64
      this.imageFile = file.file
    },
    async updateData() {
      try {
        const formData = new FormData()
        if (this.imageFile) {
          formData.append('img_url', this.imageFile)
        }
        if (this.name) {
          formData.append('name', this.name)
        }

        if (this.name) {
          const data = await this.$axios.$put('/profiles', formData, {
            'content-type': 'multipart/form-data',
          })

          console.log(data)
        }
      }
      catch (e) {
        console.log(e.response)
      }
    },
    openDelete() {
      this.isDeleteOpen = true
    },
    closeDelete() {
      this.isDeleteOpen = false
    },
  },
}
</script>
