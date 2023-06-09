<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-['monserrat']">
      <div>
        <div class="bg-white rounded-lg shadow-lg">
          <header-edit></header-edit>
          <div class="pl-5 pr-5">
            <scenario-test></scenario-test>
            <test-category></test-category>
            <pre-condition></pre-condition>
            <test-case></test-case>
            <test-step></test-step>
            <expect-test></expect-test>
            <div class="pt-6">
              <button-save></button-save>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonSave from '../../editproject/ButtonSave.vue';
  import ScenarioTest from '../ScenarioTest.vue';
  import TestCategory from '../TestCategory.vue';
  import PreCondition from '../PreCondition.vue';
  import TestCase from '../TestCase.vue';
  import TestStep from '../TestStep.vue';
  import ExpectTest from '../ExpectTest.vue';
  import HeaderEdit from './HeaderEdit.vue';
  
  export default {
    components: {
      HeaderEdit,
      ScenarioTest,
      TestCategory,
      PreCondition,
      TestCase,
      TestStep,
      ExpectTest,
      ButtonSave,
    },
  }
  </script>
  