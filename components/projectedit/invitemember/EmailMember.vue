<template>
  <div class="pt-6">
    <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="email-member">
      Email
    </label>
    <input id="email-member" v-model="items.email"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="email" placeholder="Email">
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.postMember();
  },
  methods: {
    async postMember() {
      try {
        const response = await this.$axios.$get('/members')
        // console.log(response)
        this.items = response.data
      } catch (e) {
        // console.log(e)
      }
    }
  }
}
</script>