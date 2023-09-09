import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

import messages from "./plugins/locale/index.ts";
let i18nConfig = {
	locale: uni.getLocale(),
	messages,
};
const i18n = createI18n(i18nConfig);

export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	app.use(i18n);
	return {
		app,
		Pinia,
	};
}
