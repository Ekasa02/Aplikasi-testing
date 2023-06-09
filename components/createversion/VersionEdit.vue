<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="flex">
                <h1 class="font-Montserrat font-bold text-2xl pr-[300px]">Edit Version</h1>
                <img src="../createversion/svg/CloseCircle.svg" class="cursor-pointer" @click="closeModal">
            </div>
            <hr class="border-gray-300 my-4 w-full">
            <form @submit.prevent="editVersion">
                <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="version-name">
                    Version Name
                </label>
                <input id="version-name" v-model="editedItem.name"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Version Name" required>
                <div class="flex pt-[70px] justify-between sm:pt-14">
                    <button type="submit"
                        class="ml-auto mr-[15px] bg-[#FFFFFF] font-['Montserrat'] text-[#554AF0] font-bold py-2 px-4 rounded border border-[#554AF0] hover:text-white hover:bg-red-500">
                        Update Item
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editedItem: {
                name: ''
            },
        };
    },
    mounted() {
        this.editedItem.name = this.item.name;
    },
    methods: {
        closeModal() {
            this.$emit("closePopup");
        },
        async editVersion() {
            try {
                const response = await this.$axios.$put(`/versions/${this.item.id}`, {
                    name: this.editedItem.name,
                });
                console.log(response.data);
                window.location.reload();
                this.$emit('versionEdited', response.data);
            } catch (error) {
                console.error(error);
            }
        }
    },
};
</script>
