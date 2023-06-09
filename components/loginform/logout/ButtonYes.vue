<template>
    <div>
        <button @click="logout" class="bg-[#FFFFFF] font-montserrat text-[#554AF0] font-bold py-2 px-4 rounded border border-[#554AF0] hover:text-white hover:bg-[#554AF0]">
            Yes
        </button>
    </div>
</template>

<script>
export default {
methods:{
    async logout(){
        await this.$auth.logout()
    }
}
}
</script>

<style lang="scss" scoped></style>