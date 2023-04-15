import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'en-US',
        },
        '/zh/': {
            lang: 'zh-CN',
        },
    },
    title: 'Low-Code Data Analysis',
    description: 'A simplified approach to data analysis with less coding required.',
    base: '/Demo-Documentation/', // docs: https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            '/zh/': {
                selectLanguageName: '简体中文',
            },
        },
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    children: ['/guide/README.md',
                        '/guide/installation.md',
                        '/guide/authentication.md',
                        '/guide/my-data.md',
                        '/guide/data-processing.md',
                        '/guide/data-analysis.md',
                        '/guide/forum.md',
                        '/guide/node-editor.md'
                    ],
                },
            ],
            '/zh/guide/': [
                {
                    text: '指南',
                    children: [
                        '/zh/guide/README.md',
                        '/zh/guide/installation.md',
                        '/zh/guide/authentication.md',
                        '/zh/guide/my-data.md',
                        '/zh/guide/data-processing.md',
                        '/zh/guide/data-analysis.md',
                        '/zh/guide/forum.md',
                        '/zh/guide/node-editor.md',
                    ],
                },
            ],
        },
    }),
})