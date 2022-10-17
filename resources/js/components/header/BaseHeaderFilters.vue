<template>
  <div class="header-filters">
    <router-link class="header-filters__item" :to="{ name: 'home' }">
      {{ $t('header.comics') }}
    </router-link>

    <router-link class="header-filters__item" :to="{ name: 'home' }">
      {{ $t('header.merch') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
</script>
