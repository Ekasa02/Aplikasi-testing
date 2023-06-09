<template>
  <div>
    <div>
      <div>
        <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
          Login
        </button>
        <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
          Register
        </button>
        <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
          Forgot Password
        </button>
        <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
          Change Password
        </button>
        <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
          Create Project
        </button>
        <div class="pt-2">
          <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded "
            :class="{ 'bg-[#EFEFF0] text-red': isActive }" @click="isActive = !isActive">
            {{ isActive ? 'Version Created' : 'Create Version' }}

          </button>
          <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
            Invite Member
          </button>
          <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
            Delete Project
          </button>
          <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
            Edit Project
          </button>
          <button class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
            Edit Version
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style>
button:focus {
  outline: none;
}
</style>
