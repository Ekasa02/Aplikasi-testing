<template>
  <div class="py-5 px-5 items-center justify-end">
    <div class="flex font-montserrat">
      <h1 class="font-bold">Testing version 1</h1>
      <button
        class="flex font-montserrat bg-[#554AF0] text-white font-semibold py-2 px-5 rounded"
      >
        <img src="../assets/Run.svg" />
        Run
      </button>
    </div>
    <p>6 Request</p>
    <div class="flex">
        <button
        class="font-montserrat bg-[#22B814] text-white font-semibold px-5 rounded"
      >
        POST
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">Register</h1>
      </div>
    </div>

    <div class="flex">
        <button
        class="font-montserrat bg-[#CC0000] text-white font-semibold py-0 px-5 rounded"
      >
        DELETE
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">Email activation</h1>
      </div>
    </div>

    <div class="flex">
        <button
        class="font-montserrat bg-[#22B814] text-white font-semibold px-5 rounded"
      >
        POST
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">Login</h1>
      </div>
    </div>

    <div class="flex">
        <button
        class="font-montserrat bg-[#FF9933] text-white font-semibold px-5 rounded"
      >
        PUT
      </button>
      <div class="pl-2 font-montserrat">
        <p>Users</p>
        <h1 class="font-medium">Logout</h1>
      </div>
    </div>

    <div class="flex">
        <button
        class="font-montserrat bg-[#4DAEFF] text-white font-semibold px-5 rounded"
      >
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
  layout: 'SidebarLayout',
}
</script>
