module.exports = {
    title: 'Web',
    themeConfig: {
        nav: [{
                text: '基础',
                items: [{
                        text: 'HTML',
                        link: '/base/html'
                    },
                    {
                        text: 'CSS',
                        link: '/base/css'
                    }, {
                        text: 'JS',
                        link: '/base/js'
                    }
                ]
            },
            {
                text: '工具类',
                items: [{
                        text: 'Git',
                        link: '/tools/git'
                    },
                    {
                        text: 'VSCode',
                        link: '/tools/vsCode'
                    }, {
                        text: 'Chrome',
                        link: '/tools/chrome'
                    }
                ]
            },
            {
                text: '更新',
                link: '/update/'
            },
            {
                text: 'Github',
                link: 'https://github.com/ice-wine/webTool'
            },
        ],
        // 添加侧边栏
        sidebar: 'auto',
        sidebarDepth: 1,
        lastUpdated: '最近更新',
    }
}