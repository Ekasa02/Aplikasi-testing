<template>
    <div class="flex gap-x-1 md:gap-x-3 items-center">
        <h1 class="font-medium text-xl md:text-3xl md:font-bold">{{ projectName }}</h1>
        <div v-if="platform === 'mobile'" class="text-gray-300">
            <div>
                <img src="./svg/Mobile.svg" alt="List Icon" class="h-full">
            </div>
        </div>
        <div v-if="platform === 'web'" class="text-gray-300">
            <div>
                <img src="./svg/Web.svg" alt="List Icon" class="h-full">
            </div>
        </div>
        <div v-if="typeTest === 'Manual'" class="rounded-lg border-gray-300 border-2 border-solid md:px-4 px-2">
            <p class="text-gray-700 text-sm">Manual</p>
        </div>
        <div v-if="typeTest === 'Automatic'" class="rounded-lg border-gray-300 border-2 border-solid px-4">
            <p class="text-gray-700 text-sm">Automatic</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projectName: {
            type: String,
            required: true
        },
        platform: {
            type: String,
            required: true
        },
        typeTest: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped></style>