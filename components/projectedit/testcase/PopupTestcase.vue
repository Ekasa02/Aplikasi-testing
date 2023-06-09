<template>
  <div class="w-full md:bg-[#33333385] fixed md:top-0 md:left-0 md:right-0 md:bottom-0 flex md:items-center sm:justify-center font-montserrat">
    <div>
      <div class="w-full bg-white md:rounded-lg md:shadow-lg">
        <header-create></header-create>
        <div class="pl-5 pr-5">
          <scenario-test></scenario-test>
          <test-category></test-category>
          <pre-condition></pre-condition>
          <test-case></test-case>
          <test-step></test-step>
          <expect-test></expect-test>
          <div class="pt-6">
            <button-create></button-create>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCreate from '../createproject/ButtonCreate.vue';
import HeaderCreate from './HeaderCreate.vue';
import ScenarioTest from './ScenarioTest.vue';
import TestCategory from './TestCategory.vue';
import PreCondition from './PreCondition.vue';
import TestCase from './TestCase.vue';
import TestStep from './TestStep.vue';
import ExpectTest from './ExpectTest.vue';

export default {
  components: {
    HeaderCreate,
    ScenarioTest,
    TestCategory,
    PreCondition,
    TestCase,
    TestStep,
    ExpectTest,
    ButtonCreate,
  },
}
</script>
