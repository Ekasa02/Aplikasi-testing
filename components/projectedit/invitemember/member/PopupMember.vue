<template>
  <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-Monserrat">
    <div>
      <div class="bg-white rounded-lg shadow-lg">
        <div class="py-2">
          <div class="flex px-5">
            <h1 class="font-bold text-2xl sm:pr-[300px]">Member</h1>
            <img src="../../createproject/svg/CloseCircle.svg" class="hover:cursor-pointer" @click="closeMember">
          </div>
        </div>
        <hr class="border-gray-300 w-full">
        <ul class="list-group h-full py-3 px-5">
          <li v-for="item in items" :key="item.id" class="list-group-item">
            <div class="flex items-center justify-between mb-2">
              <div class="flex">
                <!-- <img :src="item.img" class="w-[50px] h-[50px] rounded-full" alt="Profile picture"> -->
                <img v-if="!src" src="../../../assets/Profil.svg" class="w-[50px] h-[50px] rounded-full"
                  alt="Profile Picture">
                <div class="pl-2">
                  <h1>{{ item.email }}</h1>
                  <p>{{ item.role }}</p>
                </div>
              </div>
              <div class="flex float-right justify-end mb-2 items-center gap-x-3">
                <div v-if="role === 'po'" class="">
                  <button @click="openEdit(item)">
                    <img src="../../../assets/Edit.svg" class="w-[18px] h-[18px]" alt="Edit">
                  </button>
                </div>
                <div v-if="role === 'po'" class="pl-1">
                  <button @click="deleteMember(item.id)">
                    <img src="../../../assets/DeleteOutlined.svg" class="w-[18px] h-[18px]" alt="Delete">
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <PopupEdit v-if="editMember" :item="selectedItem" @closePopup="closeEdit"/>
  </div>
</template>
  
<script>
import PopupEdit from '../editmember/PopupEdit.vue';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editMember: false,
      role: "",
      user: "",
      items: [],
      selectedItem: []
    };
  },
  mounted() {
    this.getMember();
    this.getProfile();
  },
  methods: {
    closeMember() {
      this.$emit("closeMember");
    },
    async getProfile() {
      try {
        const response = await this.$axios.$get("/profiles");
        // console.log(response.data.email)
        this.user = response.data.email;
      }
      catch (e) {
        console.log(e);
      }
    },
    async getMember() {
      try {
        const response = await this.$axios.$get(`/members/?project_id=${this.id}`);
        console.log(response);
        this.items = response.data;
        this.role = response.data.filter(member => member.email === this.user)[0].role;
      }
      catch (e) {
        console.log(e);
      }
    },
    async deleteMember(itemId) {
      try {
        await this.$axios.delete(`/members/${itemId}`);
        this.getMember();
      }
      catch (error) {
        console.log(error);
      }
      this.isPopupDelete = false;
    },
    openEdit(item) {
      this.selectedItem = item;
      this.editMember = true;
    },
    closeEdit() {
      this.editMember = false;
    }
  },
  components: { PopupEdit }
}
</script>
  
  