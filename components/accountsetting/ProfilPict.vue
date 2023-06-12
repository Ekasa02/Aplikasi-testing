<template>
    <div>
        <div>
            <h1 class=" font-bold text-[16px] leading-6 pt-4">Profile picture</h1>
        </div>
        <div class="flex items-center gap-x-12 mt-3">
            <div class="">
                <img :src="getPhoto" class="w-[110px] h-[110px]  rounded-full" alt="Profile picture">
            </div>
            <div class="">
                <p>Maximum photo size is 1 MB</p>
                <button-select
                @file="handleFile"/>
            </div>
        </div>
        <div
        v-if="items?.email"
        class="pt-6">
            <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="email-member">
              Email
            </label>
            <input
            v-model="email"
              id="email-member"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              :disabled="true"

            >
          </div>
          <div 
          v-if="items?.name"
          class="pt-7">
            <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="project-name">
              Name
            </label>
            
            <input
            v-model="name"
              id="name"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
            >
          </div>
          <div class="md:pt-9 md:pb-10 py-6 w-full">
            <button class="font-['Montserrat'] text-white bg-[#554AF0]  font-semibold py-2 px-5 rounded "
            @click="updateData">
                Save
            </button>
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
        items:null,
        imageFile : null,
        name : "",
        preview : null,
        email : ""
      }
    },
    mounted (){
      this.getProfile();
    },
    computed : {
      getPhoto(){
        if(!this.items) return ''
       return this.preview ? this.preview : this.items.img_url
      }
    },
    methods:{
      async getProfile() {
            try {
                const response = await this.$axios.$get('/profiles')
                this.items=response.data
                // console.log('tess')
                // this.items = response.data
                // console.log('xx'+ items)
            } catch (e) {
                console.log(e)
            }
        },
      handleFile(file){
        this.preview = file.base64
        this.imageFile = file.file
      },
      async updateData(){
        try{
          const formData = new FormData()
          if(this.imageFile){
            formData.append('img_url',this.imageFile)
          }
          if(this.name){
            formData.append('name',this.name)
          }

          if(this.name){

            const data = await this.$axios.$put('/profiles',formData,{
              'content-type' : 'multipart/form-data'
            })
  
            console.log(data)
          }
        }
        catch(e){
          console.log(e.response)
        }
      }
    },
    watch : {
      items(){
        if(this.items){
          this.name = this.items.name
          this.email = this.items.email
        }
      }
    }
}
</script>
