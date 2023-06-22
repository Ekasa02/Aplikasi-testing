<template>
  <div class="font-montserrat">
    <!-- items.map((item,index)=>(
    <p>{{item}}</p>
  )) -->
    <div class="flex justify-between py-4">
      <h1 class="font-bold mt-4 leading-10 text-[32px]">Notification</h1>
      <!-- <h1 class="text-blue-600 float-right">{{ items.length }} Unread</h1> -->
    </div>
    <div class="h-[70vh] overflow-y-auto">
      <div v-for="item in items" :key="item.id" :class="{ 'bg-blue-100': !item.read_at }" class="flex py-2">
      <img src="../assets/Profil.svg" class="px-2 w-[80px] h-[80px]" />
      <div class="py-2 px-4 font-montserrat items-center justify-center">
        <h1>{{ item.params.result.message }}</h1>
        <p class="text-[14px]">{{ item.params.result.project_name }}</p>
        <p class="text-[12px]">{{ getTimeAgo(item.created_at) }}</p>
      </div>
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
    getTimeAgo(dateString) {
      const date = new Date(dateString);
      const now = new Date();
      const diff = now.getTime() - date.getTime();
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        return days + ' days ago';
      } else if (hours > 0) {
        return hours + ' hours ago';
      } else if (minutes > 0) {
        return minutes + ' minutes ago';
      } else {
        return seconds + ' seconds ago';
      }
    }
  },
}
</script>

<style></style>
