<template>
    <div>
        <DetailHeader />
        <div class="px-[100px] py-[50px] font-montserrat">
            <div>
                <div class="flex gap-x-2">
                    <h1 class="text-xl font-semibold">Test Case</h1>
                    <div class="ml-auto">
                        <button class="flex bg-[#EBEBFE] rounded items-center px-3 py-2 float-right">
                            <img src="../../components/assets/Edit.svg" />
                            <p class="ml-2">Edit</p>
                        </button>
                    </div>
                    <div class="pl-2">
                        <button class="flex bg-[#FFE5E6] items-center px-3 py-2 rounded">
                            <img src="../../components/assets/DeleteOutlined.svg" />
                            <p class="ml-2">Delete</p>
                        </button>
                    </div>
                </div>
                <h1 class="text-xl font-semibold">{{ items.length > 0 ? items[0].testcase : '' }}</h1>
                <div class="grid grid-cols-2 gap-4">
                    <div class="w-2/3">
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Scenario</h1>
                            <p class="mt-2">{{ items.length > 0 ? items[0].scenario_id : '' }}</p>
                        </div>
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Test Category</h1>
                            <div
                                class="font-Montserrat w-min text-[13px] bg-[#FCD051] text-white leading-[18px] py-2 px-5 rounded-md mt-2">
                                <!-- <img class="pr-1 h-4 my-auto" src="../../components/assets/PlusWhite.svg" /> -->
                                {{ items.length > 0 ? items[0].test_category : '' }}
                            </div>
                        </div>
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Pre Condition</h1>
                            <p class="mt-2">{{ items.length > 0 ? items[0].pre_condition : '' }}</p>
                        </div>
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Test Steps</h1>
                            <p class="mt-2">{{ items.length > 0 ? items[0].test_step : '' }}</p>
                        </div>
                        <div class="mt-4">
                            <h1 class="font-semibold text-xl">Expectation</h1>
                            <p class="mt-2">{{ items.length > 0 ? items[0].expectation : '' }}</p>
                        </div>
                    </div>
                    <div class="">
                        <AddResult :test-id="itemId" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import AddResult from '../../components/detailtestcase/AddResult.vue';
import DetailHeader from '../../components/detailtestcase/DetailHeader.vue';
export default {
    components: {
        AddResult,
        DetailHeader
    },
    layout: "SidebarLayout",
    data() {
        return {
            id: this.$route.params.id,
            items: [],
            itemId: ''
        };
    },
    mounted() {
        this.getTestcase();
    },
    methods: {
        async getTestcase() {
            try {
                const response = await this.$axios.$get(`/test_cases/?version_id=${this.id}`);
                console.log(response);
                this.items = response.data;
                this.itemId = response.data[0].id;
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>
  
<style lang="scss" scoped></style>