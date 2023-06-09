<template>
    <div
        class="flex flex-col sm:flex-row items-center justify-between md:px-3 lg:px-4 py-2 bg-gray-100 border-b border-gray-300">
        <div class="flex items-center">
            <LogibugLogo />
            <NavbarList />
        </div>

        <div class="flex items-center space-x-4">
            <NavbarLogin />
            <NavbarRegister />
        </div>
    </div>
</template>

<script>
import LogibugLogo from '../major/LogibugLogo.vue';
import NavbarList from './navbar/NavbarList.vue';
import NavbarLogin from './navbar/NavbarLogin.vue';
import NavbarRegister from './navbar/NavbarRegister.vue';

export default {
    components: { LogibugLogo, NavbarList, NavbarLogin, NavbarRegister }
}
</script>

<style lang="scss" scoped></style>