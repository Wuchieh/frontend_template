/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import store from "./store";
import router from "./router";

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
      .use(router)
      .use(store)
      .use(vuetify)
}
