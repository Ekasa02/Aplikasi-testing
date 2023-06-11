<template>
    <div class="flex">
        <div class=" bg-[#F8F8FA] w-[80px] h-screen flex flex-col border-r-[1px] border-gray-300 sidebar-transition hover:w-1/5"
            @mouseenter="showLabels = true" @mouseleave="showLabels = false">
            <!-- Sidebar content -->
            <div class="flex-1 flex flex-col justify-start items-center text-[#999999]">
                <ul class="mt-6 text-lg font-medium sidebar-icons">
                    <li
                        :class="{ 'text-gray-500': $route.path === '/dashboard' }"
                        class="mb-5 border-b-[2px] px-[5px] pb-[20px] border-solid border-gray-700">
                        <NuxtLink to="/dashboard">
                            <img src="./SidebarIcons/Logo.svg" alt="Home Icon" class="w-8 h-8 inline-block" />
                            <span v-show="showLabels">Logibug</span>
                        </NuxtLink>
                    </li>

                    <li :class="{ 'text-gray-500': $route.path === '/dashboard' }" class="mb-10 group side-list flex justify-center">
                        <NuxtLink to="/dashboard">
                            <img src="./SidebarIcons/Home.svg" alt="Home Icon" class="w-8 h-8 inline-block"
                                style="filter: invert(69%) sepia(3%) saturate(22%) hue-rotate(357deg) brightness(87%) contrast(94%)"
                                :style="($route.path === '/dashboard') ? 'filter: invert(26%) sepia(91%) saturate(3908%) hue-rotate(240deg) brightness(97%) contrast(95%);' : ''" />
                            <span v-show="showLabels">Home</span>
                        </NuxtLink>
                    </li>
                    <li :class="{ 'text-gray-500': $route.path === '/report' }" class="mb-10 group side-list flex justify-center">
                        <NuxtLink to="/report">
                            <img src="./SidebarIcons/Audit.svg" alt="report Icon" class="w-8 h-8 inline-block"
                                style="filter: invert(69%) sepia(3%) saturate(22%) hue-rotate(357deg) brightness(87%) contrast(94%)"
                                :style="($route.path === '/report') ? 'filter: invert(26%) sepia(91%) saturate(3908%) hue-rotate(240deg) brightness(97%) contrast(95%);' : ''" />
                            <span v-show="showLabels">Report</span>
                        </NuxtLink>
                    </li>
                    <li :class="{ 'text-gray-500': $route.path === '/notif' }" class="group side-list flex justify-center">
                        <NuxtLink to="/notif">
                            <img src="./SidebarIcons/Bell.svg" alt="notif Icon" class="w-8 h-8 inline-block"
                                style="filter: invert(69%) sepia(3%) saturate(22%) hue-rotate(357deg) brightness(87%) contrast(94%)"
                                :style="($route.path === '/notif') ? 'filter: invert(26%) sepia(91%) saturate(3908%) hue-rotate(240deg) brightness(97%) contrast(95%);' : ''" />
                            <span v-show="showLabels">Notif</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="{ 'w-full': !showLabels, 'w-4/5': showLabels }" class="h-screen bg-gray-100">
            <!-- <component :is="currentRouteComponent" /> -->
            <Nuxt/>
        </div>
    </div>
</template>  
  
<script>
import Dashboard from '../views/LogibugDashboard.vue';
// import notifPage from '../views/notifPage.vue'
// import notifPage from '../views/notifPage.vue'

export default {
    name: "SidebarLayout",
    data() {
        return {
            showLabels: false,
        };
    },
    computed: {
        currentRouteComponent() {
            switch (this.$route.path) {
                case '/dashboard':
                    return Dashboard
                // case '/issues':
                //     return IssuesPage
                // case '/notif':
                //     return notifPage
                default:
                    return Dashboard
            }
        }
    }
}
</script>
  
<style>
.sidebar-transition {
    /* transition: width 0.3s ease-in-out; */
}

.sidelist {
    filter: invert(69%) sepia(3%) saturate(22%) hue-rotate(357deg) brightness(87%) contrast(94%);
}
</style>
  