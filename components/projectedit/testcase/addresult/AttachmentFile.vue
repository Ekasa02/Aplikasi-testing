<template>
  <div class="">
    <div class="pt-[15px] font-['Montserrat']">
      <h1 class="block font-bold text-[14px] mb-2">Attacment</h1>
      <p class="pb-2">Max file size is 2mb. Supported files are jpg, jpeg, png</p>
      <div class="rounded p-4" style="border:dashed 1px #c9c5c5;">
        <label for="input-file" class="cursor-pointer ">
          <input id="input-file" type="file" accept="image/*" class="hidden"/>
          <img src="../../../assets/upload.svg" class="pl-56"/>
          <p class="pl-40 pt-2">Click to browse files</p>
        </label>
      </div>
    </div>
  </div>
</template>
