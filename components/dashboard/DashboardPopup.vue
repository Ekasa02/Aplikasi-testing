<template>
  <div 
   style="z-index:50;" class=" top-15 fixed md:top-16  md:right-0 transform -translate-x-28" @click="openProfile"
  >
    <div >
      <div class="bg-white rounded-lg shadow-lg pl-7 md:pl-0">
        <header-account></header-account>
        <div class="pl-5">
          <account-profil></account-profil>
        </div>
        <level-app></level-app>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAccount from '../profil/HeaderAccount.vue'
import AccountProfil from '../profil/AccountProfil.vue'
import LevelApp from '../profil/LevelApp.vue'

export default {
  components: {
    HeaderAccount,
    AccountProfil,
    LevelApp,
  },
  methods: {
    openProfile() {
      this.$emit('openProfile');
    },
    closeProfile() {
      this.$emit('closeProfile');
    }
  },
}
</script>

<style>

</style>
