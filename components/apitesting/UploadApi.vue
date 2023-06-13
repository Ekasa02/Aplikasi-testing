<template>
    <div
        class="font-montserrat px-[25px] py-[30px] max-w-[30%] mx-auto flex flex-col border border-solid border-[#B3B3B3] rounded-lg">
        <h1 class="font-semibold text-center">Upload File</h1>
        <div class="rounded p-2 mt-[20px]">
            <label for="input-file"
                class="cursor-pointer flex gap-x-[18px] border border-solid border-[#B3B3B3] py-3 rounded-lg text-[#666666] justify-between px-4">
                <div class="flex">
                    <input @change="handleFile($event)" id="input-file" type="file" accept="json/*" class="hidden" />
                    <img src="./svg/upload.svg" />
                    <p class="font-medium text-md ml-3">{{ uploadedFileName || 'Upload file json' }}</p>
                </div>
                <span v-if="uploadedFileName" class="cursor-pointer" @click="removeFile">X</span>
            </label>
        </div>
        <button @click="postFile"
            class="text-center py-[16px] mx-auto w-[95%] bg-[#554AF0] text-white mt-[20px] rounded-lg">
            Send
        </button>
    </div>
</template>
  
<script>
export default {
    props: {
        versionId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            uploadedFile: null,
            uploadedFileName: '',
        };
    },
    methods: {
        handleFile(event) {
            const file = event.target.files[0];
            this.uploadedFile = file;
            this.uploadedFileName = file.name;
        },
        removeFile() {
            this.uploadedFile = null;
            this.uploadedFileName = '';
        },
        async postFile() {
            try {
                const formData = new FormData();
                formData.append('json_url', this.uploadedFile);
                formData.append('version_id', this.versionId);

                const response = await this.$axios.$post('/automatic', formData);
                console.log(response);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
  
<style lang="scss" scoped></style>
  