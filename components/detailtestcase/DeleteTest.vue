<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-[40vw]">
            <div class="flex justify-end">
                <img src="../assets/CloseCircle.svg" alt="image" class="cursor-pointer" @click="closeDelete">
            </div>
            <div class="flex flex-col justify-center">
                <img src="../assets/Delete.svg" alt="image" class="w-[60%] h-auto mx-auto">
                <p class="text-center pt-7 font-['Montserrat'] text-[20px] mx-auto">Are you sure you want to delete this testcase ?</p>
            </div>
            <div class="flex pt-[30px] justify-center items-center gap-x-5">
                <button
                    class="bg-[#FFFFFF] font-['Montserrat'] text-[#554AF0] font-bold py-2 px-4 rounded border border-[#554AF0] hover:text-white hover:bg-red-500" @click="closeDelete"
                >
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
        itemId: {
            // Declare the item prop and its type here
            type: Number,
            required: true,
        },
        scenarioId: {
            type: Number,
            required: true,
        }
    },
    mounted(){
        // this.deleteItem()
    },
    methods: {
        closeDelete() {
            this.$emit("closeDelete")
        },
        async deleteItem() {
            try {
                const response = await this.$axios.delete(`/test_cases/${this.itemId}`);
                console.log(response);
                this.$router.push(`/testcase/${this.scenarioId}`);
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>