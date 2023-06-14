<template>
    <div>
        <ul class="list-group h-full mt-8 max-h-[70vh] overflow-y-auto">
            <li class="list-group-item mb-2" v-for="item in items" :key="item.id">
                <div class="border-b border-gray-200 flex justify-between pb-5 hover:cursor-pointer"
                    @click="toApiTesting(item.id)">
                    <div class="flex">
                        <h1 class="font-semibold text-xl">{{ item.name }}</h1>
                    </div>
                    <div class="flex gap-3 items-center" v-if="role !== 'dev'">
                        <button @click="deletePopup(item.id); $event.stopPropagation()">
                            <img src="./svg/Delete.svg" alt="List Icon" class="h-5 w-5">
                        </button>
                        <button @click="copyItemsToVersion(item.id); $event.stopPropagation()">
                            <img src="./svg/Copy.svg" alt="List Icon" class="h-5 w-5"/>
                        </button>
                        <button @click="editPopup(item); $event.stopPropagation()">
                            <img src="./svg/Edit.svg" alt="List Icon" class="h-5 w-5">
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        <VersionEdit v-if="isEditVisible" :item="selectedItem" @closePopup="closePopup" />
        <VersionDelete v-if="isDeleteVisible" :item="deleteItem" @deleteVersion="deleteVersion"/>
    </div>
</template>
  
<script>
import VersionEdit from './VersionEdit.vue';
import VersionDelete from './VersionDelete.vue';

export default {
    components: { VersionEdit, VersionDelete },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        role: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isEditVisible: false,
            isDeleteVisible: false,
            selectedItem: null,
            deleteItem: null,
            isPopupDelete: false,
        }
    },
    methods: {
        editPopup(item) {
            this.selectedItem = item
            this.isEditVisible = true
        },
        closePopup() {
            this.isEditVisible = false;
        },
        deletePopup(item) {
            this.deleteItem = item
            this.isDeleteVisible = true;
        },
        deleteVersion() {
            this.isDeleteVisible = false;
        },
        toApiTesting(id) {
            this.$router.push(`/apitesting/${id}`);
        },
        deleteProject() {
            this.isPopupDelete = true
        },
        async copyItemsToVersion(item) {
            try {
                const response = await this.$axios.$post(`/versions/clone/${item}`);
                console.log(response);
                window.location.reload();
            } catch (error) {
                console.error(error);
            }
        },
    },
}

</script>

<style lang="scss" scoped></style>
