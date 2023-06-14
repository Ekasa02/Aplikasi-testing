<template>
    <div class="mt-[10px] md:mt-[40px]">
        <h1 class="text-[#1a1a1a] text-xl md:text-4xl font-normal md:font-medium">Hello, {{ user.name }} <span class="font-bold">{{ userName }}</span></h1>
    </div>
</template>
  
<script>
export default {
    data(){
        return{
            user:[]
        }
    },
    mounted (){
      this.getName();
    },
    methods:{
      async getName() {
            try {
                const response = await this.$axios.$get('/profiles')
                console.log(response)
                this.user = response.data
            } catch (e) {
                console.log(e)
            }
        }
    },
    // name: 'HelloUser',
    // props: {
    //     userName: {
    //         type: String,
    //         required: true
    //     }
    // }
}
</script>

<style lang="scss" scoped></style>