<template>
    <div>
        <div>
            <h1 class=" font-bold text-[16px] leading-6 pt-8">Profile picture</h1>
        </div>
        <div class="flex">
            <div class="pt-4">
                <img :src="src" class="w-[200px] h-[200px] pt-3 rounded-full" alt="Profile picture">
            </div>
            <div class="pl-16 pt-10">
                <p>Maximum photo size is 1 MB</p>
                <button-select @input="updateImage"></button-select>
                <button @click="saveImage" class="font-['Montserrat'] text-white bg-[#554AF0] font-semibold py-2 px-5 rounded mt-4">
                    Save Photo
                  </button>
            </div>
        </div>
       
    </div>
</template>

<script>
import ButtonSelect from "../profil/ButtonSelect.vue"

export default {
    components:{
        ButtonSelect,
    },
    data(){
        return{
            src:null,
            file:null,
        };
    },
    methods:{
        updateImage(file){
            this.file = file;
            this.readFile();
            // this.src = URL.createObjectURL(file);
        },
        readFile(){
            const reader = new FileReader();
            reader.onload  = (event)=>{
                this.src = event.target.result;
            };
            reader.readAsDataURL(this.file);
        },
        saveImage(){
            if(this.file){
                this.uploadImage(this.file);
            }
        },
        uploadImage(file){
            const formData = new FormData();
            formData.append("image", file);
            const url = "http://localhost://3000/api/v1/profiles";

            fetch(url,{
                method: "PUT",
                body: formData,
            })
            .then((response) => {
                console.log("Image success");
            })
            .catch((error)=>{
                console.log("Image failed", error);
            });
        }
        // openFile(){
        //     const input = document.createElement('input');
        //     input.type='file';
        //     input.accept='image/*';
        //     input.onchange=this.handleFileSelect;
        //     input.click();
        // },
        // handleFileSelect(event){
            
        //     const file = event.target.files[0];
        //     this.uploadImage(file); 
        // },
        // uploadImage(file){
        //     const formData = new FormData();
        //     formData.append('image',file);
        //     fetch('http://localhost:3000/api/v1/profiles',{
        //         method:'GET',
        //         body:formData,
        //     })
        //     .then(response=>{
        //         console.log(JSON.stringify(response.formData));
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //     });
        // }
    },
}
</script>
