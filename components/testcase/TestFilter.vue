<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-monserrat">
        <div class="bg-white rounded-lg shadow-lg">
            <div class="pt-4">
                <div class="flex items-center">
                    <h1 class="font-bold text-2xl sm:pr-[340px] pl-5">Filter test case</h1>
                    <button @click="hideFilter">
                        <img src="./svg/CloseCircle.svg" class="pr-4">
                    </button>
                </div>
                <hr class="border-gray-300 mt-4 w-full">
            </div>
            <div class="p-5">
                <h1 class="block font-bold text-md mb-2">Features</h1>
                <ul class="flex gap-x-3">
                    <li v-for="item in scenario" :key="item.id">
                        <div>
                            <button class="font-['Montserrat'] text-[13px] leading-[18px] py-2 px-2 rounded"
                                :class="{ 'bg-[#554AF0] text-white': activeItems.includes(item.name), 'bg-[#EFEFF0] text-[#666666]': !activeItems.includes(item.name) }"
                                @click="toggleActive(item.name)">
                                {{ item.name }}
                            </button>
                        </div>
                    </li>
                </ul>
                <div class="mt-8">
                    <button
                        class="font-['Montserrat'] bg-[#FFFFFF] font-semibold py-2 px-5 rounded border border-solid border-[#554AF0]"
                        @click="addAll">
                        {{ isAllSelected ? 'Unselect All' : 'Select All' }}
                    </button>
                    <button class="font-['Montserrat'] text-white bg-[#554AF0] font-semibold py-2 px-5 rounded"
                        @click="filterItems">
                        Filter
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        projectId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            scenario: [],
            activeItems: [],
        };
    },
    mounted() {
        this.getScenario();
    },
    computed: {
        isAllSelected() {
            return this.activeItems.length === this.scenario.length;
        },
    },
    methods: {
        hideFilter() {
            this.$emit("hideFilter");
        },
        async getScenario() {
            try {
                const response = await this.$axios.$get(`/scenarios/?project_id=${this.projectId}`);
                this.scenario = response.data;
            } catch (e) {
                console.log(e);
            }
        },
        toggleActive(itemName) {
            if (this.activeItems.includes(itemName)) {
                this.activeItems = this.activeItems.filter((name) => name !== itemName);
            } else {
                this.activeItems.push(itemName);
            }
        },
        filterItems() {
            const activeItemsData = this.scenario.filter((item) => this.activeItems.includes(item.name));
            this.$emit("filterItems", activeItemsData);
            this.$emit("hideFilter");
        },
        addAll() {
            if (this.activeItems.length === this.scenario.length) {
                // If all buttons are currently active, unselect all
                this.activeItems = [];
            } else {
                // Select all available buttons
                this.activeItems = this.scenario.map(item => item.name);
            }
        },
    },
};
</script>
  