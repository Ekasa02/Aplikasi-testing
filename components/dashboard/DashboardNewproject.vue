<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-[#33333385]">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="flex">
                <h1 class="font-bold text-2xl pr-[300px]">Create Project</h1>
                <img src="../dashboard/svg/CloseCircle.svg" class="cursor-pointer" @click="closeModal" />
            </div>
            <hr class="border-gray-300 my-4 w-full" />
            <form @submit.prevent="postProject">
                <div class="mb-4">
                    <label for="project-name" class="font-bold text-sm mb-2">Project Name</label>
                    <input id="project-name" v-model="newItem.name" type="text" placeholder="Project Name" required
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                    <label for="platform" class="font-bold text-sm mb-2">Platform</label>
                    <div class="relative">
                        <select id="platform" v-model="newItem.platform" required
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="" disabled selected>Select a platform</option>
                            <option value="mobile">Mobile</option>
                            <option value="web">Web</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <label for="testing-type" class="font-bold text-sm mb-2">Testing Type</label>
                    <div class="relative">
                        <select id="testing-type" v-model="newItem.type_test" required
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="" disabled selected>Select an option</option>
                            <option value="manual">Manual</option>
                            <option value="automatic">Automatic</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <button type="submit"
                        class="ml-auto bg-white text-[#554AF0] font-bold py-2 px-4 rounded border border-[#554AF0] hover:text-white hover:bg-blue-500">
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            newItem: {
                name: '',
                description: '',
                type_test: 'web',
                platform: 'manual',
            },
        };
    },
    methods: {
        closeModal() {
            this.$emit("closePopup");
        },
        async postProject() {
            try {
                const response = await this.$axios.$post('/projects', this.newItem);
                console.log(response);
                // Reload the page
                location.reload();
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
  
<style scoped>
.modal-overlay {
    background-color: #33333385;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #ffffff;
    padding: 8px;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.modal-header {
    display: flex;
}

.modal-title {
    font-weight: bold;
    font-size: 1.5rem;
    padding-right: 12rem;
}

.modal-close {
    cursor: pointer;
}

.modal-divider {
    border-color: #cbd5e0;
    margin: 1rem 0;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 0.5rem;
}
</style>
  