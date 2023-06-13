<template>
  <div class="font-montserrat">
    <!-- items.map((item,index)=>(
    <p>{{item}}</p>
  )) -->
    <div class="flex justify-between py-10">
      <h1 class="font-bold text-[32px]">Notifikasi</h1>
      <h1 class="text-blue-600 float-right">{{ items.length }} Unread</h1>
    </div>
    <div v-for="item in items" :key="item.id" class="flex bg-blue-100 py-2">
      <img src="../assets/Profil.svg" class="px-2 w-[80px] h-[80px]" />
      <div class="py-2 px-4 font-montserrat items-center justify-center">
        <h1>{{ item.params.result.message }}</h1>
        <p class="text-[14px]">{{ item.params.result.project_name }}</p>
        <p class="text-[12px]">{{ item.created_at }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPopupVisible: false,
      isProfileVisible: false,
      items: [],
      userId: '',
    }
  },
  mounted() {
    this.getProfile()
    setTimeout(() => {
      this.getNotif();
    }, 1000);

  },
  methods: {
    async getProfile() {
      try {
        const response = await this.$axios.$get(`/profiles`);
        console.log(response);
        this.userId = response.data.id;
      } catch (e) {
        console.log(e);
      }
    },
    async getNotif() {
      try {
        const response = await this.$axios.$get(`/notifications`)
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style></style>
