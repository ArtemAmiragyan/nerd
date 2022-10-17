import { defineStore } from 'pinia';
import UserModel from '@/models/UserModel';
import { computed, ref } from 'vue';
import axios from '@/plugins/axios';
import User from '@/interfaces/User';
import { getCookie, setCookie } from 'typescript-cookie';
import { BEARER } from '@/constants/cookie-keys';

export interface State {
  user: UserModel
}

export function createDefaultUser(): UserModel {
  return {
    id: null,
    email: '',
    name: '',
  };
}

export const useAuthStore = defineStore('auth/user', () => {
  const user = ref<UserModel>(createDefaultUser());

  const authenticated = computed(() => (user.value.id));

  async function login(formData: User) {
    const { data } = await axios.post('login', formData);

    setCookie(BEARER, data.token);

    return data.token;
  }

  return {
    user,
    authenticated,
    login,
  };
});
