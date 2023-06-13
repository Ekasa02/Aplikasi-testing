<!-- <template>
  <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-['monserrat']">
    <div>
      <div class="bg-white rounded-lg shadow-lg">
        <div class=" pt-4">
          <div class="flex">
            <h1 class="font-['Montserrat'] font-bold text-2xl sm:pr-[340px] pl-5">Filter test case</h1>
            <img src="../../createproject/svg/CloseCircle.svg" class="pr-4">
          </div>
          <hr class=" border-gray-300 my-4 w-full">
        </div>
        <div class="pl-5 pr-5">
          <div class="">
            <div class="font-['Monserrat']">
              <h1 class="block font-bold text-[16px] mb-2">Scenario</h1>
            </div>
          </div>
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
              <button
                class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded "
                :class="{ 'bg-[#EFEFF0] text-red': isActive }" @click="isActive = !isActive">
                {{ isActive ? 'Version Created' : 'Create Version' }}
              </button>
              <button
                class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
                Invite Member
              </button>
              <button
                class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
                Delete Project
              </button>
              <button
                class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
                Edit Project
              </button>
              <button
                class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
                Edit Version
              </button>
            </div>
          </div>
          <div class="pt-[15px] relative">
            <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="test-category">
              Test Category
            </label>
            <div class="flex items-center">
              <input id="test-category"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Test Category" />
              <img src=".././createproject/svg/DropDown.svg" class="absolute right-2" />
            </div>
          </div>
          <div class="pt-4">
            <div>
              <div>
                <h1 class="block font-bold text-[16px] mb-2">Result State</h1>
              </div>
              <div class="flex-row gap-4">
                <button
                  class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
                  None
                </button>
                <button
                  class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
                  Pass
                </button>
                <button
                  class="font-['Montserrat'] text-[13px] bg-[#EFEFF0] text-[#666666] leading-[18px] py-2 px-2 rounded">
                  Fail
                </button>
              </div>
            </div>
          </div>
          <div class="pt-12 pb-5">
            <div class="pt-9 pb-10">
              <button class="font-['Montserrat'] text-white bg-[#554AF0]  font-semibold py-2 px-5 rounded ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script> -->