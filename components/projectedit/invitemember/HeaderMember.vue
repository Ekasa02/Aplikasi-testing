<template>
    <div class=" pt-3">
        <div class="flex" >
            <h1 class="font-['Montserrat'] font-bold text-2xl sm:pr-[300px] pl-5">Invite Member</h1>
            <button  @click="closeMember">
                <img  src="../createproject/svg/CloseCircle.svg" class="pr-4">
            </button>    
        </div>
        <hr class=" border-gray-300 my-4 w-full">
    </div>
</template>

<script>
export default {
    methods: {
    closeMember() {
      this.$emit("closeMem");
    },
  },
}
</script>