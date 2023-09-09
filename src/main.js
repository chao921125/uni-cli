import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from "pinia";
import { createI18n } from "vue-i18n";
import messages from "./plugins/locale";
let i18nConfig = {
	locale: uni.getLocale(),
	messages,
};
const i18n = createI18n(i18nConfig);

import config from "@/config/index";

export function createApp() {
	const app = createSSRApp(App);
	config.loadFontFace();
	app.use(Pinia.createPinia());
	app.use(i18n);
	return {
		app,
		Pinia,
	};
}
