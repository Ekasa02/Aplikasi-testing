<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-['monserrat']">
      <div>
        <div class="bg-white rounded-lg shadow-lg">
          <header-edit></header-edit>
          <div class="pl-5 pr-5">
            <email-member></email-member>
            <role-member></role-member>
            <div class="pt-9 pb-16">
                <button-save ></button-save>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonSave from '../../../version/ButtonSave.vue';
  import EmailMember from '../EmailMember.vue';
  import RoleMember from '../RoleMember.vue';
  import HeaderEdit from './HeaderEdit.vue';
  
  
  export default {
    components: {
      HeaderEdit,
      EmailMember,
      RoleMember,
      ButtonSave,
    },
  }
  </script>
  