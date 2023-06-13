<template>
  <div class="mt-[30px]">
    <form class="mx-auto" @submit.prevent="register" @close-modal="registerPopup = false">
      <div class="relative mb-4">
        <input id="name" v-model="name" type="text"
          class="block px-12 py-2 w-full text-gray-900 bg-transparent rounded-lg border border-solid border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " @blur="validateName" />
        <label for="name"
          class="absolute text-[#4D4D4D] font-medium duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-top-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-2 left-10">Name</label>
        <img src="../svg/User.svg" alt="Mail Icon" class="absolute left-3 top-2.5 h-5 w-5" />
        <p v-if="isInvalidName" class="text-red-500 text-sm mt-1">
          The name must be filled
        </p>
      </div>
      <div class="relative mb-4">
        <input id="email" v-model="email" type="email" :class="[
          'block px-12 py-2 w-full text-gray-900 bg-transparent rounded-lg border border-solid',
          isInvalidEmail ? 'border-red-500' : 'border-gray-300',
          'appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer',
        ]" placeholder=" " @blur="validateEmail" />
        <label for="email"
          class="absolute text-[#4D4D4D] font-medium duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:-top-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-2 left-10">
          Email
        </label>
        <img src="../svg/Mail.svg" alt="Mail Icon" class="absolute left-3 top-2.5 h-5 w-5" />
        <p v-if="isInvalidEmail" class="text-red-500 text-sm mt-1">
          {{ emailErrorMessage }}
        </p>
      </div>
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
        <p v-if="isInvalidPassword" class="text-red-500 text-sm mt-1">
          The password must consist of at least 8 characters.
        </p>
      </div>
      <div class="mb-5 relative">
        <input id="password" v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" :class="[
          'block px-12 py-2 w-full text-gray-900 bg-transparent rounded-lg border border-solid',
          isInvalidConfirmPassword ? 'border-red-500' : 'border-gray-300',
          'appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer',
        ]" placeholder=" " @blur="validateConfirmPassword" />
        <label for="confirmPassword"
          class="absolute text-[#4D4D4D] font-medium duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:-top-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75 peer-focus:-translate-y-2 left-10">Confirm
          Password</label>
        <img src="../svg/Password.svg" alt="Lock Icon" class="absolute left-3 top-2.5 h-5 w-5" />
        <img src="../svg/ShowPassword.svg" alt="Show Password Icon"
          class="absolute right-3 top-2.5 h-5 w-5 cursor-pointer" @click="showConfirmPassword = !showConfirmPassword" />
        <p v-if="isInvalidConfirmPassword" class="text-red-500 text-sm mt-1">
          The password you entered does not match.
        </p>
      </div>
      <div class="mb-5">
        <button type="submit" class="w-full py-[10px] bg-[#554AF0] text-white rounded-[8px] text-md hover:bg-blue-600">
          Register
        </button>
      </div>
    </form>
    <RegisterPopup v-if="registerPopup" @close="closePopup" />
    <div class="text-center text-sm">
      <p class="text-[#333333]">
        Already have an account?
        <nuxt-link to="/login" class="text-[#554AF0] font-semibold font-sm hover:underline">
          Login
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import RegisterPopup from './RegisterPopup.vue'

export default {
  components: { RegisterPopup },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      registerPopup: false,
      isInvalidPassword: false,
      isInvalidEmail: false,
      isInvalidConfirmPassword: false,
      isInvalidName: false,
      emailErrorMessage: '',
    }
  },
  methods: {
    closePopup() {
      this.registerPopup = false;
    },
    validatePassword() {
      if (this.password.length < 8) {
        this.isInvalidPassword = true
      } else {
        this.isInvalidPassword = false
      }
    },
    validateEmail() {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
      if (!emailRegex.test(this.email)) {
        this.isInvalidEmail = true
        this.emailErrorMessage = 'Please enter a valid email address.'
      } else {
        this.isInvalidEmail = false
        this.emailErrorMessage = ''
      }
    },
    validateConfirmPassword() {
      if (this.confirmPassword !== this.password || !this.confirmPassword) {
        this.isInvalidConfirmPassword = true
      }
    },
    validateName() {
      if (!this.name) {
        this.isInvalidName = true
      }
    },
    async register() {
      try {
        // this.validateEmail()
        // this.validatePassword()
        // this.validateConfirmPassword()
        // this.validateName()

        // console.log(this.isInvalidEmail,this.isInvalidPassword,this.isInvalidName,this.isInvalidConfirmPassword)

        await this.$axios.$post('/users', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword
        });

        this.$router.push('/login')
        // if(!this.isInvalidEmail && !this.isInvalidConfirmPassword && !this.isInvalidEmail){
        //   console.log(response.data);
        //   this.registerPopup = true;

        // }
        // Success, redirect to dashboard or home page
      } catch (error) {
        console.error(error);
        // Display error message to user
      }
    }

  },
}
</script>

<style lang="scss" scoped></style>
