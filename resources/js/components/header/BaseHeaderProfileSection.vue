<template>
  <div class="header-profile-section">
    <div class="header-profile-section__language">
      <GlobeSvg/>
    </div>

    <div class="header-profile-section__account">
      <router-link class="header-profile-section__sign-in" :to="{name: 'login'}">
        {{ $t('header.sign_in') }}
      </router-link>

      <!--        TODO: add user thumbnail image -->
      <div class="header-profile-section__avatar-thumbnail">
        <img
          v-if="false"
          class="header-profile-section__avatar-thumbnail-image"
          src=""
          alt="profile image"
        >
        <div v-else class="header-profile-section__default-avatar-thumbnail">
          <UserSvg/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobeSvg from '@/svgs/header/GlobeSvg.vue';
import UserSvg from '@/svgs/header/UserSvg.vue';
</script>
