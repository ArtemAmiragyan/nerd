<!--TODO: add styles, validation-->
<template>
  <div class="login-page">
    <div class="container">
      <form class="login-page__form" @submit.prevent="login">
        <div class="login-page__form-item">
          <label class="base-label base-label_required">{{ $t('login.email_address') }}</label>
          <input v-model="form.email" :disabled="isLoading" class="base-input" type="email">
        </div>

        <div class="login-page__form-item">
          <label class="base-label base-label_required">{{ $t('login.password') }}</label>
          <input v-model="form.password" :disabled="isLoading" class="base-input" type="password">
        </div>

        <button :disabled="isLoading" class="login-page__form-submit" type="submit">
          {{ $t('login.sign_in') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import User from '@/interfaces/User';
import { BEARER } from '@/constants/cookie-keys';
import { useRouter } from 'vue-router';

const auth = useAuthStore();

const form = ref<User>({ email: '', password: '' });
const isLoading = ref<boolean>(false);
const router = useRouter();

const login = async () => {
  try {
    isLoading.value = true;

    const token = await auth.login(form.value);

    if (token) {
      await router.push({ name: 'home' });
    }
  } finally {
    isLoading.value = false;
  }
};
</script>
