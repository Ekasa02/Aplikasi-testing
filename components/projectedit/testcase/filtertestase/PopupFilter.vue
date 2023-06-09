<template>
    <div class="bg-[#33333385] fixed top-0 left-0 right-0 bottom-0 flex items-center sm:justify-center font-['monserrat']">
      <div>
        <div class="bg-white rounded-lg shadow-lg">
          <header-filter></header-filter>
          <div class="pl-5 pr-5">
            <scenario-filter></scenario-filter>
            <scenario-fitur></scenario-fitur>
            <test-category></test-category>
            <result-state></result-state>
            <div class="pt-12 pb-5">
              <button-save></button-save>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import ButtonSave from '../../editproject/ButtonSave.vue';
import HeaderFilter from './HeaderFilter.vue';
import ScenarioFilter from './ScenarioFilter.vue';
import ScenarioFitur from './ScenarioFitur.vue';
import TestCategory from './TestCategory.vue';
import ResultState from './ResultState.vue';

export default{
    components: {
        HeaderFilter,
        ScenarioFilter,
        ScenarioFitur,
        TestCategory,
        ResultState,
        ButtonSave,
    }
}
</script>