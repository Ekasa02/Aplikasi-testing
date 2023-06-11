<template>
    <div class="font-montserrat">
        <TestingHeader />
        <div class="py-[50px] px-[100px]">
            <h1 class="font-bold text-2xl">{{ version }}</h1>
            <div class="mt-[80px]">
                <UploadApi :version-id="id"/>
            </div>
            <ProjectsResponse :version-id="id"/>
        </div>
    </div>
</template>
  
<script>
import ProjectsResponse from '~/components/apitesting/ProjectsResponse.vue';
import TestingHeader from '~/components/apitesting/TestingHeader.vue';
import UploadApi from '~/components/apitesting/UploadApi.vue';

export default {
    components: { UploadApi, TestingHeader, ProjectsResponse },
    layout: 'SidebarLayout',
    data() {
        return {
            id: this.$route.params.id,
            version: '',
        };
    },
    mounted() {
        this.getVersion();
    },
    methods: {
        async getVersion() {
            try {
                const response = await this.$axios.$get(`/versions/${this.id}`);
                console.log(response);
                this.version = response.data[0].name;
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>
  
<style lang="scss" scoped></style>
  