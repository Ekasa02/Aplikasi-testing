<template>
    <div class="flex flex-col items-center justify-center py-[70px]" id="about">
        <HeroTitle />
        <HeroButton />
        <HeroImage />
    </div>
</template>

<script>
import HeroTitle from './hero/HeroTitle.vue';
import HeroButton from './hero/HeroButton.vue';
import HeroImage from './hero/HeroImage.vue';

export default {
    components: { HeroTitle, HeroButton, HeroImage }
}
</script>

<style lang="scss" scoped></style>