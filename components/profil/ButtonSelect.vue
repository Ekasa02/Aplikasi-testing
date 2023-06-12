<template>
    <div class="pt-5">
        <label for="input-file" class="cursor-pointer ">
          <input 
          id="input-file" 
          type="file" accept="image/*" 
          class="hidden" 
          ref="file" 
          @change="handleFileSelect"/>
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
    data(){
        return {
            preview :null
        }
    },
    methods : {
        handleFile(){
            this.$refs.file.click()
        },
        handleFileSelect(event){

            const reader = new FileReader()

            if(event.target.files?.length > 0){
                reader.onload = e => {
                    this.preview = e.target.result
                    this.$emit('file', 
                    {
                        file : event.target.files[0],
                        base64 : this.preview
                    })
                }
                reader.readAsDataURL(event.target.files[0])
            }

            // console.log(event)
            // // const file = event.target.files[0];
            // this.$emit("file", file);
        }
    }
}
</script>
