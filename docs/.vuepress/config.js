module.exports = {
    title: 'Web',
    themeConfig: {
        nav: [{
                text: '基础',
                items: [{
                    text: 'HTML',
                    link: '/base/html'
                }, {
                    text: 'CSS',
                    link: '/base/css'
                }, {
                    text: 'JS',
                    link: '/base/js'
                }]
            },
            {
                text: '进阶',
                items: [{
                    text: 'CSS相关',
                    items: [{
                        text: 'Less & Sass',
                        link: '/index/'
                    }, {
                        text: 'Flex',
                        link: '/index/'
                    }]
                }, {
                    text: 'JS相关',
                    items: [{
                        text: 'ES',
                        link: '/index/'
                    }, {
                        text: 'TS',
                        link: '/index/'
                    }]
                }]
            },
            {
                text: '库&框架',
                items: [{
                    text: 'Vue',
                    link: '/index/'
                }, {
                    text: 'React',
                    link: '/index/'
                }, {
                    text: 'NodeJs',
                    link: '/index/'
                }, {
                    text: '移动端',
                    link: '/index/'
                }, {
                    text: '微信小程序',
                    link: '/index/'
                }, {
                    text: 'UI相关',
                    items: [{
                        text: 'Element-ui',
                        link: '/index/'
                    }, {
                        text: 'Vant',
                        link: '/index/'
                    }, {
                        text: 'AntD',
                        link: '/index/'
                    }]
                }]
            },
            {
                text: '其他',
                items: [{
                    text: '网络',
                    link: '/index/'
                }, {
                    text: '浏览器',
                    link: '/index/'
                }, {
                    text: '工程化',
                    link: '/index/'
                }, {
                    text: '前端优化',
                    items: [{
                        text: '性能优化',
                        link: '/index/'
                    }, {
                        text: '兼容性',
                        link: '/index/'
                    }]
                }, {
                    text: '前端进阶',
                    items: [{
                        text: '前端安全',
                        link: '/index/'
                    }, {
                        text: '前端监控',
                        link: '/index/'
                    }, {
                        text: '前端规范',
                        link: '/index/'
                    }]
                }, {
                    text: '其他',
                    items: [{
                        text: 'Serverless',
                        link: '/index/'
                    }]
                }]
            }, {
                text: '经验',
                items: [{
                    text: '开发技巧',
                    items: [{
                        text: 'CSS技巧',
                        link: '/index/'
                    }, {
                        text: 'JS技巧',
                        link: '/index/'
                    }]
                }, {
                    text: '面试',
                    items: [{
                        text: '技术篇',
                        link: '/index/'
                    }, {
                        text: '项目篇',
                        link: '/index/'
                    }]
                }]
            },
            {
                text: '工具',
                items: [{
                    text: 'Git',
                    link: '/tools/git'
                }, {
                    text: 'VSCode',
                    link: '/tools/vsCode'
                }, {
                    text: 'Chrome',
                    link: '/tools/chrome'
                }]
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