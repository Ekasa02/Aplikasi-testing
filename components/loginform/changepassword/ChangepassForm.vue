
<template>
  <div class="mt-[40px]">
    <form class="max-w-md" @submit.prevent="changePW">
      <div class="mb-4 relative">
        <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" :class="[
          'block px-12 py-2 w-full text-gray-900 bg-transparent rounded-lg border border-solid',
          isInvalidPassword ? 'border-red-500' : 'border-gray-300',
          'appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer',
        ]" placeholder=" " @blur="validatePassword" />
        <label for="password"
          class="absolute text-[#4D4D4D] font-medium duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-top-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-2 left-10">Password</label>
        <img src="../svg/Password.svg" alt="Lock Icon" class="absolute left-3 top-2.5 h-5 w-5" />
        <img src="../svg/ShowPassword.svg" alt="Show Password Icon"
          class="absolute right-3 top-2.5 h-5 w-5 cursor-pointer" @click="showPassword = !showPassword" />
        <p v-if="password && isInvalidPassword" class="text-red-500 text-sm mt-1">
          The password must consist of at least 8 characters.
        </p>
      </div>
      <div class="mb-4 relative">
        <input id="password" v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" :class="[
          'block px-12 py-2 w-full text-gray-900 bg-transparent rounded-lg border border-solid',
          isInvalidConfirmPassword ? 'border-red-500' : 'border-gray-300',
          'appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer',
        ]" placeholder=" " @blur="confirmPasswordTouched = true" />
        <label for="confirmPassword"
          class="absolute text-[#4D4D4D] font-medium duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-top-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-2 left-10">Confirm
          Password</label>
        <img src="../svg/Password.svg" alt="Lock Icon" class="absolute left-3 top-2.5 h-5 w-5" />
        <img src="../svg/ShowPassword.svg" alt="Show Password Icon"
          class="absolute right-3 top-2.5 h-5 w-5 cursor-pointer" @click="showConfirmPassword = !showConfirmPassword" />
        <p v-if="confirmPasswordTouched && confirmPassword !== password" class="text-red-500 text-sm mt-1">
          The password you entered does not match.
        </p>
      </div>

      <div class="mb-6 pt-6">
        <button type="submit" class="w-full py-[10px] bg-[#554AF0] text-white rounded-[8px] text-md hover:bg-blue-600">
          Save
        </button>
      </div>
    </form>
    <ChangeSuccess v-if="displayPopup" @closePopup="closePopup"/>
  </div>
</template>

<script>
import ChangeSuccess from '../popup/ChangeSuccess.vue'

export default {
    data() {
        return {
            password: "",
            showPassword: false,
            showConfirmPassword: false,
            isInvalidPassword: false,
            displayPopup: false,
        };
    },
    computed: {
        isInvalidConfirmPassword() {
            return this.confirmPassword !== this.password;
        },
    },
    // mounted(){
    //   this.changePW();
    // },
    methods: {
        validatePassword() {
            if (this.password.length < 8) {
                this.isInvalidPassword = true;
            }
            else {
                this.isInvalidPassword = false;
            }
        },
        async changePW() {
            try {
                const token = this.$route.query.k;
                const res = await this.$axios.$post(`/password/reset?token=${token}`, {
                    password: this.password,
                    password_confirmation: this.confirmPassword,
                });
                console.log(res); // tinggal ditambah message dan harusnya otomatis lari ke login
                this.displayPopup = true;
            }
            catch (error) {
                console.error(error);
            }
        },
        closePopup() {
          this.displayPopup = false;
        }
    },
    components: { ChangeSuccess }
}
</script>

<style lang="scss" scoped></style>
