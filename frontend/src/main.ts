/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { worker } from './mocks/browser'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

if (process.env.NODE_ENV !== 'production') {
  await worker.start()
}

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
