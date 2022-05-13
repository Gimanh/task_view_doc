const { description } = require( '../../package' )


module.exports = {
    base: '/task_view_doc/',

    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'TaskView',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        [ 'link', { rel: 'icon', href: './images/logo.png' } ],
        [ 'meta', { name: 'theme-color', content: '#3eaf7c' } ],
        [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' } ],
        [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ]
    ],

    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'English', // this will be set as the lang attribute on <html>
            title: '',
            description: ''
        },
        // '/ru/': {
        //     lang: 'Русский',
        //     title: '',
        //     description: ''
        // }
    },

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        logo: '/images/logo.png',
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Config',
                link: '/config/'
            },
            {
                text: 'Blog',
                link: '/blog/'
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        '',
                        'installation',
                        'directory-structure',
                        'config',
                        'build-from-source',
                        'cli-taskview',
                        'admins',
                        'change-log',
                    ]
                }
            ],
            '/blog/':[
                {
                    title: 'Blog',
                    collapsable: false,
                    children: [
                        '',
                        'v1.1.0',
                        'v1.0.1-admin',
                        'v1.0.1',
                        'v1.0.0'
                    ]
                }
            ]
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
