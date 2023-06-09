<template>
    <div>
        <div>
            <h1 class=" font-bold text-[16px] leading-6 pt-4">Profile picture</h1>
        </div>
        <div class="flex items-center gap-x-12 mt-3">
            <div class="">
                <img :src="items.img_url" class="w-[110px] h-[110px]  rounded-full" alt="Profile picture">
            </div>
            <div class="">
                <p>Maximum photo size is 1 MB</p>
                <button-select></button-select>
            </div>
        </div>
        <div class="pt-6">
            <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="email-member">
              Email
            </label>
            <input
              v-model="items.email"
              id="email-member"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              :disabled="true"

            >
          </div>
          <div class="pt-7">
            <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="project-name">
              Name
            </label>
            
            <input
            v-model="items.name"
              id="name"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
            >
          </div>
          <div class="md:pt-9 md:pb-10 py-6 w-full">
            <button class="font-['Montserrat'] text-white bg-[#554AF0]  font-semibold py-2 px-5 rounded ">
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
        items:[]
      }
    },
    mounted (){
      this.getProfile();
    },
    methods:{
      async getProfile() {
            try {
                const response = await this.$axios.$get('/profiles')
                console.log(response)
                this.items = response.data
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>
