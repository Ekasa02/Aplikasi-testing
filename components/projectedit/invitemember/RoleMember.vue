<template>
  <div class="pt-[15px] relative">
    <label
      class="block font-['Montserrat'] font-bold text-[14px] mb-2"
      for="project-name"
      >Role</label
    >
    <select
      id="project-name"
      v-model="items.role"
      required
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="" disabled selected>Role</option>
      <option value="pass">QA</option>
      <option value="fail">Programmer</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.postMember()
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
    },
  },
}
</script>
