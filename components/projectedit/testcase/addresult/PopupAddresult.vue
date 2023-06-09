<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex sm:items-center sm:justify-center font-['monserrat']">
      <div>
        <div class="bg-white rounded-lg shadow-lg ">
          <header-add></header-add>
          <div class="pl-5 pr-5">
            <acctually-add></acctually-add>
            <note-add></note-add>
            <state-add></state-add>
            <attachment-file></attachment-file>
            <div class="pt-4 pb-4">
                <button-save></button-save>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import ButtonSave from "../../../version/ButtonSave.vue";
import HeaderAdd from "./HeaderAdd.vue";
import AcctuallyAdd from "./ActuallyAdd.vue";
import NoteAdd from "./NoteAdd.vue";
import StateAdd from "./StateAdd.vue";
import AttachmentFile from "./AttachmentFile.vue";

export default{
    components:{
        HeaderAdd,
        AcctuallyAdd,
        NoteAdd,
        StateAdd,
        AttachmentFile,
        ButtonSave,
    }
}
</script>