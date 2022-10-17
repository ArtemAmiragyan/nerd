import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';
import messages from '@/locales';

import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  // TODO: add dynamic language change
  locale: import.meta.env.VITE_APP_I18N_LOCALE || 'ru',
  globalInjection: true,
  messages,
});

createApp(App)
  .use(i18n)
  .use(createPinia())
  .use(router)
  .mount('#app');
