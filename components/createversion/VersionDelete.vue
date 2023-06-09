<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="pl-[360px]">
                <img src="../assets/CloseCircle.svg" alt="image" class="cursor-pointer" @click="deleteVersion">
            </div>
            <div class="pt-6 pl-11 pr-7">
                <img src="../assets/Delete.svg" alt="image">
                <p class="text-center pt-7 font-['Montserrat'] text-[20px]">Are you sure to delete project</p>
            </div>
            <div class="flex pt-[30px] justify-center items-center gap-x-5">
                <button
                    class="bg-[#FFFFFF] font-['Montserrat'] text-[#554AF0] font-bold py-2 px-4 rounded border border-[#554AF0] hover:text-white hover:bg-red-500" @click="deleteVersion">
                    Cancel
                </button>
                <button class="font-['Montserrat'] bg-[#554AF0] text-white font-bold py-2 px-4 rounded" @click="deleteItem">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            // Declare the item prop and its type here
            type: Number,
            required: true,
        },
    },
    methods: {
        deleteVersion() {
            this.$emit("deleteVersion")
        },
        async deleteItem() {
            try {
                const response = await this.$axios.delete(`/versions/${this.item}`);
                console.log(response);
                window.location.reload();
                // Additional logic or actions after deleting the item
            } catch (error) {
                console.log(error);
            }
            this.isPopupDelete = false;
        },
    },
}
</script>