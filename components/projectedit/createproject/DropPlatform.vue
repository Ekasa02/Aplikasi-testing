<template>
  <div class="pt-[15px] relative">
    <label class="block font-['Montserrat'] font-bold text-[14px] mb-2" for="platform">
      Platform
    </label>
    <div class="relative">
      <select id="platform"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Platform">
        <option value="" disabled selected>Select a platform</option>
        <option value="android">Mobile</option>
        <option value="web">Web</option>
      </select>
      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg class="w-4 h-4 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </div>
    </div>
  </div>
</template>
