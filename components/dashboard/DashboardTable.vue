<template>
  <div>
    <div class=" max-h-[43vh] overflow-y-auto overflow-x-auto">
      <ul class="list-group h-full py-4">
        <li v-for="item in filteredItems" :key="item.id" class="list-group-item mb-2">
          <div class="flex w-full justify-between border-b border-solid py-2 hover:cursor-pointer"
            @click="navigateToVersion(item)">
            <div class="flex items-center">
              <div class="py-2">
                <img src="./svg/List.svg" alt="List Icon" class="h-full">
              </div>
              <div class="flex flex-col ml-3 gap-y-1 items">
                <h5 v-if="item.name" class="text-sm font-semibold text-gray-700">
                  <span class="text-gray-700 font-semibold text-sm">{{ item.name }}</span>
                </h5>
                <div class="flex gap-x-4 gap-y-2items-center">
                  <div v-if="item.platform === 'mobile' && item.type_test === 'manual'" class="text-gray-300">
                    <div>
                      <img src="./svg/Mobile.svg" alt="List Icon" class="h-full">
                    </div>
                  </div>
                  <div v-if="item.platform === 'web' && item.type_test === 'manual'" class="text-gray-300">
                    <div>
                      <img src="./svg/Web.svg" alt="List Icon" class="h-full">
                    </div>
                  </div>
                  <div v-if="item.type_test === 'manual'" class="rounded-lg border-gray-300 border-2 border-solid px-4">
                    <p class="text-gray-700">Manual</p>
                  </div>
                  <div v-if="item.type_test === 'automatic'"
                    class="rounded-lg border-gray-300 border-2 border-solid px-4">
                    <p class="text-gray-700 text-sm">Automatic</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-x-2 md:gap-x-4 md:mr-5 mr-2">
              <button @click="deleteProject(item.id); $event.stopPropagation()">
                <img src="./svg/Delete.svg" alt="List Icon" class="h-[20px] w-[20px]">
              </button>
              <button @click="editPopup(item); $event.stopPropagation()">
                <img src="./svg/Edit.svg" alt="List Icon" class="h-[20px] w-[20px]">
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="!items.length" class="flex justify-center">
      <img src="./svg/NoProject.svg" alt="No items found." class="h-[200px]">
    </div>
    <DashboardDelete v-if="isPopupDelete" :item="deleteItemId" @deleteProject="hideDelete" />
    <PopupEdit v-if="isEditVisible" :item="selectedItem" @closePopup="closeEdit" />
  </div>
</template>
  
<script>
import PopupEdit from '../projectedit/editproject/PopupEdit.vue';
import DashboardDelete from './DashboardDelete.vue';
export default {
  components: { PopupEdit, DashboardDelete },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    searchValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isEditVisible: false,
      selectedItem: null,
      isPopupDelete: false,
      deleteItemId: null,
    };
  },
  computed: {
    filteredItems() {
      if (this.searchValue !== '') {
        return this.items.filter(item =>
          item.name.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      } else {
        return this.items;
      }
    }
  },
  methods: {
    navigateToVersion(item) {
      if (item.type_test === 'manual') {
        this.toCreateVersion(item.id);
      } else if (item.type_test === 'automatic') {
        this.toAutomaticVersion(item.id);
      }
    },
    editPopup(item) {
      this.selectedItem = item;
      this.isEditVisible = true;
    },
    deleteProject(id) {
      this.deleteItemId = id;
      this.isPopupDelete = true;
    },
    hideDelete() {
      this.isPopupDelete = false;
    },
    closeEdit() {
      this.isEditVisible = false;
    },
    toCreateVersion(id) {
      this.$emit("createVersion", `/createversion/${id}`);
    },
    toAutomaticVersion(id) {
      this.$emit("createVersion", `/automaticversion/${id}`);
    }
  },
};
</script>