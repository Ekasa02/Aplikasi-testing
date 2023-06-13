<template>
    <div
        :class="`rounded-[28px] md:px-6 md:py-2 px-2 py-2 md:w-[120px] w-[80px] flex items-center justify-center mt-3 text-white font-semibold text-sm ${levelClass}`">
        {{ level }}</div>
</template>
  
<script>
export default {
    props: {
        level: {
            type: String,
            required: true
        }
    },
    computed: {
        levelClass() {
            switch (this.level) {
                case 'Beginner':
                    return 'bg-[#F37FB7]';
                case 'Intermediate':
                    return 'bg-[#4DAEFF]';
                case 'Advanced':
                    return 'bg-[#FCC42E]';
                case 'Mastery':
                    return 'bg-[#9747FF]';
                default:
                    return 'bg-[#F37FB7]';
            }
        }
    }
}
</script>
  