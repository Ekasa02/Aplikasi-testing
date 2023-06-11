<template>
  <div class="py-5 px-5 items-center justify-end">
    <div class="flex  font-montserrat justify-between">
      <div class="ml-auto">
        <button
          class="flex float-right  font-montserrat bg-[#554AF0] text-white font-semibold py-2 px-5 rounded gap-x-2 items-center">
          <img src="../assets/Run.svg" />
          Run
        </button>
      </div>
    </div>
    <p class="py-4">6 Request</p>
    <div class="flex py-4">
      <button class="font-montserrat bg-[#22B814] text-white font-semibold px-5 rounded">
        POST
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">Register</h1>
      </div>
    </div>
    <div class="flex py-4">
      <button class="font-montserrat bg-[#CC0000] text-white font-semibold py-0 px-5 rounded">
        DELETE
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">Email activation</h1>
      </div>
    </div>
    <div class="flex py-4">
      <button class="font-montserrat bg-[#22B814] text-white font-semibold px-5 rounded">
        POST
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">Login</h1>
      </div>
    </div>
    <div class="flex py-4">
      <button class="font-montserrat bg-[#FF9933] text-white font-semibold px-5 rounded">
        PUT
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">Logout</h1>
      </div>
    </div>

    <div class="flex py-4">
      <button class="font-montserrat bg-[#4DAEFF] text-white font-semibold px-5 rounded">
        GET
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">All users</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    versionId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: []
    };
  },
  mounted(){
    this.getTesting();
  },
  methods: {
    async getTesting() {
      try {
        const response = await this.$axios.$get(`/automatic/${this.versionId}`);
        console.log(response);
        this.items = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  }
}
</script>
