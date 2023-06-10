<template>
  <div
    class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-montserrat"
  >
    <div @click="inviteMember">
      <div class="bg-white rounded-lg shadow-lg">
        <header-member @closeMem="closeMem"></header-member>
        <div class="pl-5 pr-5">
          <form @submit.prevent="postMember">
            <div class="pt-6">
              <label
                class="block font-['Montserrat'] font-bold text-[14px] mb-2"
                for="email-member"
              >
                Email
              </label>
              <input
                id="email-member"
                v-model="items.email"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
              />
            </div>
            <label
              class="block font-montserrat font-bold text-[14px] mb-2 py-3"
              for="email-member"
            >
              Role
            </label>
            <div class="flex items-center">
              <select
                id="test-category"
                v-model="items.role"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected>Role</option>
                <option value="qa">QA</option>
                <option value="dev">Programmer</option>
              </select>
            </div>
            <div class="pt-7">
              <button
                class="font-montserrat text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-5 rounded"
              >
                Send
              </button>
            </div>
            <div>
              <div class="font-montserrat pb-14">
                <h1 class="pt-8 font-semibold text-[16px] leading-6">Member</h1>

                <button class="float-right text-[#554AF0]" @click="infoMember">
                 
                    See all
                 
                </button>
                <!-- <p class="font-medium text-[#808080] leading-5">None</p> -->
                <img
                  :src="items.img_url"
                  class="w-[60px] h-[60px] pt-3 rounded-full"
                  alt="Profile picture"
                />
              </div>
            </div>
          </form>
          <PopupMember
          v-if="isMembervisible"
          :id="id"
          @closeMember="closeMember"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupMember from './member/PopupMember.vue';
import HeaderMember from './HeaderMember.vue';

export default {
  components: {
    HeaderMember,
    PopupMember,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isMembervisible: false,
      items: {
        email: '',
        role: '',
      },
    }
  },

  methods: {
    infoMember() {
      this.isMembervisible = true;
    },
    closeMem() {
      this.$emit('closeInvite')
    },
    closeMember() {
      this.isMembervisible = false
    },

    async postMember() {
      this.items.project_id = this.id
      try {
        const response = await this.$axios.$post('/members', this.items)
        console.log(response)
        window.location.reload()
        // Handle the response, show success message, etc.
      } catch (error) {
        console.log(error)
        // Handle the error, show error message, etc.
      }
      // Reset form fields
      this.items = {
        email: '',
        role: '',
      }
    },
    mounted() {
      this.getProfile()
    },
    async getProfile() {
      try {
        const response = await this.$axios.$get('/profiles')
        console.log(response)
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>