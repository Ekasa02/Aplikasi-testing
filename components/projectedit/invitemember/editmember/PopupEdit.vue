<template>
  <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-monserrat">
    <div>
      <div class="bg-white rounded-lg shadow-lg">
        <div class="pt-3">
          <div class="flex">
            <h1 class="font-['Montserrat'] font-bold text-2xl sm:pr-[300px] pl-5">Edit member</h1>
            <button @click="closeModal">
              <img src="../../createproject/svg/CloseCircle.svg" class="pr-4">
            </button>
          </div>
          <hr class="border-gray-300 my-4 w-full">
        </div>
        <div class="pl-5 pr-5">
          <div class="pt-6">
            <label class="block font-bold text-[14px] mb-2" for="email-member">
              Email
            </label>
            <input id="email-member" :value="item.email" @input="updateEmail($event.target.value)"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email" placeholder="Email" disabled>
          </div>
          <div class="pt-[15px] relative">
            <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="project-name">Role</label>
            <select id="project-name" v-model="newRole" required @input="updateRole($event.target.value)"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="" disabled selected>Role</option>
              <option value="qa">QA</option>
              <option value="dev">Programmer</option>
            </select>
          </div>
          <div class="pt-9 pb-16">
            <div class="pt-9 pb-10">
              <button class="font-['Montserrat'] text-white bg-[#554AF0]  font-semibold py-2 px-5 rounded " @click="editProject">
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
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newRole: ''
    }
  },
  mounted() {
    this.newRole = this.item.role
  },
  methods: {
    closeModal() {
      this.$emit("closePopup");
    },
    updateEmail(value) {
      this.$emit('update:item', { ...this.item, email: value });
    },
    updateRole(value) {
      this.$emit('update:item', { ...this.item, role: value });
    },
    async editProject() {
      try {
        await this.$axios.$put(`/members/${this.item.id}`, {
          role: this.newRole,
        });
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
