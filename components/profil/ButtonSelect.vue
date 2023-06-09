<template>
    <div class="pt-5">
        <label for="input-file" class="cursor-pointer ">
          <input id="input-file" type="file" accept="image/*" class="hidden" ref="file" @change="handleFileSelect"/>
            <button 
            @click="handleFile"
            class="font-['Montserrat'] text-white bg-[#554AF0]  font-semibold py-2 px-5 rounded ">
                Select Photo
            </button>
        </label>
    </div>
</template>

<script>

export default {
    methods : {
        handleFile(){
            this.$refs.file.click()
        },
        handleFileSelect(event){
            const file = event.target.files[0];
            this.$emit("file", file);
        }
    }
}
</script>
