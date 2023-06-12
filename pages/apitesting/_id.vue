<template>
    <div class="font-montserrat">
        <TestingHeader />
        <div class="py-[50px] px-[100px]" v-if="!responseTrue">
            <h1 class="font-bold text-2xl">{{ version }}</h1>
            <div class="mt-[80px]">
                <UploadApi :version-id="id" />
            </div>
        </div>
        <ProjectsResponse v-if="responseTrue" class="py-[50px] px-[100px]" :version-id="id" :items="items" :version-name="version" />
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
            items: [],
            responseTrue: false,
        };
    },
    mounted() {
        this.getVersion();
        this.getTesting();
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
        async getTesting() {
            try {
                const response = await this.$axios.$get(`/automatic/${this.id}`);
                console.log(response);
                this.items = response.data;
                this.responseTrue = true;
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>
  
<style lang="scss" scoped></style>
  