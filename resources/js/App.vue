<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script setup lang="ts">
import FrontLayout from '@/layouts/BaseFrontLayout.vue';
import { RouteMeta, useRoute } from 'vue-router';
import { shallowRef, watch } from 'vue';

const layout = shallowRef(FrontLayout);
const route = useRoute();

const setLayout = async (routeMeta: RouteMeta | { layout: string }) => {
    if (!routeMeta.layout) {
        layout.value = FrontLayout;


        return;
    }

    try {
        const component = await import(`./layouts/${routeMeta.layout}.vue`);

        layout.value = component?.default || FrontLayout;
    } catch (e) {
        layout.value = FrontLayout;
    }
};

setLayout(route.meta);

watch(
    () => route.meta,
    async (meta) => setLayout(meta),
);
</script>
