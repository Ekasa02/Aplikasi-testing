<template>
  <div class="justify-between items-center">
    <h1 class="font-bold py-8 leading-10 text-[32px]">Report</h1>
    <nuxtLink to="/reportbar" class="flex gap-2 font-montserrat py-4 items-center justify-center">
      <img src="../assets/mobile.svg" />
      <h1 class="font-bold">Logibug</h1>
      <p
        class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2"
      >
        Manual
      </p>
      <div class="ml-auto">
        <img src="../assets/clickKanan.svg" class="float-right" />
      </div>
    </nuxtLink>
    <hr class="pb-3 border-gray-200" />
    <nuxtLink to="/reportbar" class="flex gap-2 font-montserrat py-4 items-center justify-center">
      <img src="../assets/website.svg" />
      <h1 class="font-bold">Logibug</h1>
      <p
        class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2"
      >
        Manual
      </p>
      <div class="ml-auto">
        <img src="../assets/clickKanan.svg" class="float-right" />
      </div>
    </nuxtLink>
    <hr class="pb-3 border-gray-200" />
    <nuxtLink to="/reportbar" class="flex gap-2 font-montserrat items-center py-4 justify-center">
        <img src="../assets/API.svg" />
        <h1 class="font-bold">Logibug</h1>
        <p
          class="text-gray-700 rounded-lg border-gray-300 border-2 border-solid px-2"
        >
          API
        </p>
        <div class="ml-auto">
          <img src="../assets/clickKanan.svg" class="float-right" />
        </div>
      </nuxtLink>
      <hr class="pb-3 border-gray-200" />
    </div>
</template>

<script>
export default {}
</script>

<style></style>
