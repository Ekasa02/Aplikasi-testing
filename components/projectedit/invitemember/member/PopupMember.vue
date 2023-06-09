<template>
  <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-Monserrat" >
    <div >
      <div class="bg-white rounded-lg shadow-lg">
        <div class="py-2">
          <div class="flex px-5">
            <h1 class="font-bold text-2xl sm:pr-[300px]">Member</h1>
            <img src="../../createproject/svg/CloseCircle.svg" class="hover:cursor-pointer" @click="closeMember" >
          </div>
        </div>
        <hr class="border-gray-300 w-full">
        <ul class="list-group h-full py-3 px-5">
          <li v-for="item in items" :key="item.id" class="list-group-item">
            <div class="flex items-center justify-between">
              <div class="flex">
                <img src="../../../assets/Profil.svg" class="w-[50px] h-[50px] rounded-full" alt="Profile picture">
                <div class="pl-2">
                  <h1>{{ item.email }}</h1>
                  <p>{{ item.role }}</p>
                </div>
              </div>
              <div class="flex float-right justify-end mb-2 items-center gap-x-3">
                <div class="">
                  <img src="../../../assets/Edit.svg" class="w-[25px] h-[25px] rounded-full" alt="Sunting">
                </div>
                <div class="pl-1">
                  <img src="../../../assets/DeleteOutlined.svg" class="w-[25px] h-[25px] rounded-full" alt="Delete">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      
      items: []
    }
  },
  mounted() {
    this.getMember();
  },
  methods: {
    
    closeMember() {
      this.$emit("closeMember")
    },
    async getMember() {
      try {
        const response = await this.$axios.$get(`/members/?project_id=${this.id}`)
        console.log(response)
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
  
  