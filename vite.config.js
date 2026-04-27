import vituum from 'vituum'
import posthtml from '@vituum/vite-plugin-posthtml'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

/** @type {import('vite').UserConfig} */
export default {
    plugins: [
        vituum(),
        posthtml({root: './src'}),
        tailwindcss(),
        cloudflare({
            config: {
                routes: [
                    { pattern: 'quickset.cyberchase.co', custom_domain: true }
                ],
                preview_urls: true
            }
        })
    ]
}
