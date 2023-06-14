<template>
  <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-montserrat">
    <div>
      <div class="bg-white rounded-lg shadow-lg">
        <div class="pt-3">
          <div class="flex">
            <h1 class="font-['Montserrat'] font-bold text-2xl sm:pr-[300px] pl-5">Invite Member</h1>
            <button @click="closeMem">
              <img src="../createproject/svg/CloseCircle.svg" class="pr-4" alt="Close">
            </button>
          </div>
          <hr class="border-gray-300 my-4 w-full">
        </div>
        <div class="pl-5 pr-5">
          <form @submit.prevent="postMember">
            <div class="pt-6">
              <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="email-member">Email</label>
              <input id="email-member" v-model="items.email"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email" />
            </div>
            <label class="block font-montserrat font-bold text-[14px] mb-2 py-3" for="role">Role</label>
            <div class="flex items-center">
              <select id="role" v-model="items.role"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="" disabled selected>Role</option>
                <option value="qa">QA</option>
                <option value="dev">Programmer</option>
              </select>
            </div>
            <div class="pt-7">
              <button type="submit"
                class="font-montserrat text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-5 rounded">Send</button>
            </div>
            <div>
              <div class="font-montserrat pb-14">
                <h1 class="pt-8 font-semibold text-[16px] leading-6">Member</h1>
                <button class="float-right text-[#554AF0]" @click="infoMember">See all</button>
                <img v-if="items.img_url" :src="items.img_url" class="w-[60px] h-[60px] pt-3 rounded-full" alt="Profile picture" />
                <img v-if="!items.img_url" src="../../assets/Profil.svg" class="w-[60px] h-[60px] pt-3 rounded-full" alt="Profile Picture"></img>
              </div>
            </div>
          </form>
          <PopupMember v-if="isMembervisible" :id="id" @closeMember="closeMember" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupMember from './member/PopupMember.vue';

export default {
  components: {
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
        img_url: '', // Make sure to add the img_url property to the items object
      },
    };
  },

  methods: {
    infoMember() {
      this.isMembervisible = true;
    },
    closeMem() {
      this.$emit('closeInvite');
    },
    closeMember() {
      this.isMembervisible = false;
    },
    async postMember() {
      this.items.project_id = this.id;
      try {
        const response = await this.$axios.$post('/members', this.items);
        console.log(response);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    async mounted() { // Move the mounted hook outside the methods object
      await this.getProfile();
    },
    async getProfile() {
      try {
        const response = await this.$axios.$get('/profiles');
        console.log(response);
        this.items = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
