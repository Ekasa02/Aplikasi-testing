<template>
    <div>
      <SettingProfile @showProfile="showProfile" />
      <div class="bg-[#FBFBFC] md:px-4 md:py-3">
        <DashboardPopup v-if="isProfileVisible" />
        <div class="md:rounded-[20px] bg-white border border-solid border-[#EFEFF0] px-[40px] w-full">
          <ProfilePict />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SettingProfile from '../components/accountsetting/SettingProfile.vue';
  import DashboardPopup from '../components/dashboard/DashboardPopup.vue';
  import ProfilePict from '../components/accountsetting/ProfilPict.vue';
  
  export default {
    data() {
      return {
        isProfileVisible: false,
        items: {
          email: '',
          name: ''
        }
      };
    },
    components: {
      SettingProfile,
      DashboardPopup,
      ProfilePict,
    },
    methods: {
      showProfile() {
        this.isProfileVisible = !this.isProfileVisible;
      },
    },
    layout: 'SidebarLayout',
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  