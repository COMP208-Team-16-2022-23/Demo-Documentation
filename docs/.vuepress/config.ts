import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {backToTopPlugin} from '@vuepress/plugin-back-to-top'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Low-Code Data Analysis',
            description: 'Simplifying complexity',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '低代码数据分析平台',
            description: '化繁为简',
        },

    },
    // set title color to red

    base: '/Demo-Documentation/', // docs: https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages

    plugins: [
        backToTopPlugin(),
        searchPlugin({
            // exclude all-in-one.md from search
            isSearchable: (page) => page.path !== '/guide/all-in-one.html',
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索文档',
                },
            },
        }),
    ],

    theme: defaultTheme({
        logo: '/images/hero.png',
        logoDark: '/images/hero-white.png',
        repo: 'COMP208-Team-16-2022-23/Demo-Documentation',
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            '/zh/': {
                selectLanguageText: '选择语言',
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
                        '/guide/node-editor.md',
                        // '/guide/all-in-one.md'
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