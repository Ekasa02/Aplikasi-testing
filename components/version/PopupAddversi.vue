<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-['monserrat']">
      <div>
        <div class="bg-white rounded-lg shadow-lg">
          <header-addv></header-addv>
          <div class="pl-5 pr-5">
            <project-name></project-name>
          </div>
          <div class="flex pt-[90px] justify-between sm:pt-14 pr-5 pb-14">
            <button-cancel class="ml-auto mr-[15px] "></button-cancel>
            <button-save ></button-save>
        </div> 
        </div>
      </div>
    </div>
  </template>

<script>
import ButtonCancel from "../projectedit/createproject/ButtonCancel.vue";
import ButtonSave from "./ButtonSave.vue";
import HeaderAddv from "./HeaderAddv.vue";
import ProjectName from "./ProjectName.vue";

export default {
    components:{
        HeaderAddv,
        ProjectName,
        ButtonCancel,
        ButtonSave,
    }
}
</script>