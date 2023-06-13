<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="flex">
                <h1 class="font-Montserrat font-bold text-2xl pr-[300px]">Scenario</h1>
                <img src="../createversion/svg/CloseCircle.svg" class="cursor-pointer" alt="Close Icon" @click="closeModal">
            </div>
            <hr class="border-gray-300 my-4 w-full">
            <form @submit.prevent="postScenario">
                <div class="relative pt-[15px]">
                    <label class="block font-Montserrat font-bold text-[14px] mb-2" for="scenario">
                        Add Scenario
                    </label>
                    <div class="flex items-center">
                        <input id="scenario" v-model="item.name" :disabled="isEditing(item.id)"
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Scenario" />
                        <button
                            class="hover:opacity-80 text-white font-bold py-2 px-2.5 bg-blue-500 rounded ml-3 border border-gray-300">
                            Create
                        </button>
                    </div>
                </div>
            </form>
            <p class="block font-Montserrat font-bold text-[14px] mb-2 mt-[25px]">Scenario list</p>
            <div class="max-h-[40vh] overflow-y-auto">
                <ul class="list-group h-full mt-[5px]">
                    <li v-for="item in items" :key="item.id" class="list-group-item mb-2">
                        <div class="border-b border-gray-200 flex justify-between pb-[10px] mr-[15px]">
                            <div class="flex">
                                <div v-if="!isEditing(item.id)">
                                    <h1 class="font-semibold text-lg">{{ item.name }}</h1>
                                </div>
                                <div v-else>
                                    <input v-model="editedItemNames[item.id]" ref="editInput"
                                        class="border rounded w-[350px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" />
                                </div>
                            </div>
                            <div class="flex gap-x-3 items-center">
                                <button v-if="!isEditing(item.id)" @click="startEditing(item.id)"
                                    class="text-white font-bold py-1 px-1 rounded ml-3">
                                    <img src="./svg/Edit.svg" alt="Edit Icon" class="h-4 w-4">
                                </button>
                                <button v-if="!isEditing(item.id)" @click="deleteScenario(item.id)"
                                    class="text-white font-bold py-1 px-1 rounded">
                                    <img src="./svg/Delete.svg" alt="Edit Icon" class="h-4 w-4">
                                </button>
                                <button v-if="isEditing(item.id)" @click="editScenario(item.id)"
                                    class="text-white font-bold py-1 px-1 rounded ml-3 border-2 border-solid border-blue-200">
                                    <img src="./svg/Check.svg" alt="Save Icon" class="h-4 w-4">
                                </button>
                                <button v-if="isEditing(item.id)" @click="cancelEditing"
                                    class="text-white font-bold py-1 px-1 rounded border-2 border-solid border-red-200">
                                    <img src="./svg/Close.svg" alt="Cancel Icon" class="h-4 w-4">
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        projectId: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            items: [],
            item: {
                name: '',
                project_id: '',
            },
            editingItemId: null,
            editedItemNames: {},
        };
    },
    mounted() {
        this.getScenario();
    },
    methods: {
        closeModal() {
            this.$emit("hideScenario");
        },
        async getScenario() {
            try {
                const response = await this.$axios.$get(`/scenarios/?project_id=${this.projectId}`);
                console.log(response);
                this.items = response.data;
            } catch (e) {
                console.log(e);
            }
        },
        async postScenario() {
            try {
                this.item.project_id = this.projectId;
                const response = await this.$axios.$post('/scenarios', this.item);
                console.log(response);
                this.getScenario(); // Force refresh the page
            } catch (error) {
                console.log(error);
            }
            this.item.name = ''; // Update the property name
        },
        startEditing(itemId) {
            this.editingItemId = itemId;
            this.editedItemNames[itemId] = this.items.find(item => item.id === itemId)?.name || '';
        },
        async editScenario(itemId) {
            try {
                const editedName = this.editedItemNames[itemId];
                await this.$axios.$put(`/scenarios/${itemId}`, {
                    name: editedName,
                });
                this.editingItemId = null;
                this.getScenario()
            } catch (error) {
                console.error(error);
            }
            this.editingItemId = null;
        },
        async deleteScenario(itemId) {
            try {
                await this.$axios.delete(`/scenarios/${itemId}`);
                this.getScenario()
            } catch (error) {
                console.log(error);
            }
            this.isPopupDelete = false;
        },
        cancelEditing() {
            this.editingItemId = null;
        },
        isEditing(itemId) {
            return this.editingItemId === itemId;
        },
    }
};
</script>
