<template>
    <div class="flex gap-x-3 items-center">
        <h1 class="text-3xl font-bold">{{ testName }}</h1>
        <img src="./svg/Ellipsis.svg" alt="Test Icon" class="h-[25px] w-[25px]">
        <img src="./svg/Filter.svg" alt="Test Icon" class="h-[25px] w-[25px]">
    </div>
</template>

<script>
export default {
    props: {
        testName: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped></style>