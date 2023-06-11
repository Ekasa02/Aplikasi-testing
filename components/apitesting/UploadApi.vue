<template>
    <div class="font-montserrat px-[25px] py-[30px] max-w-[30%] mx-auto flex flex-col border border-solid border-[#B3B3B3] rounded-lg">
        <h1 class="font-semibold text-center">Upload File</h1>
        <div class="rounded p-2 mt-[20px]">
            <label for="input-file" class="cursor-pointer flex gap-x-[18px] border border-solid border-[#B3B3B3] py-3 rounded-lg text-[#666666]">
                <input @change="handleFile($event)" id="input-file" type="file" accept="image/*" class="hidden" />
                <img src="./svg/upload.svg" class="ml-5" />
                <p class="font-medium text-md">Upload file json</p>
            </label>
        </div>
        <button class="text-center py-[16px] mx-auto w-[95%] bg-[#554AF0] text-white mt-[20px] rounded-lg">
            Send    
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>