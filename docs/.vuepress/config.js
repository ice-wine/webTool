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
                        link: '/advanced/css/less&sass'
                    }, {
                        text: 'Flex',
                        link: '/advanced/css/flex'
                    }]
                }, {
                    text: 'JS相关',
                    items: [{
                        text: 'ES',
                        link: '/advanced/js/es'
                    }, {
                        text: 'TS',
                        link: '/advanced/js/ts'
                    }]
                }]
            },
            {
                text: '库&框架',
                items: [{
                    text: 'Vue',
                    link: '/frame/vue'
                }, {
                    text: 'React',
                    link: '/frame/react'
                }, {
                    text: 'NodeJs',
                    link: '/frame/nodeJs'
                }, {
                    text: '移动端',
                    link: '/frame/mobile'
                }, {
                    text: '微信小程序',
                    link: '/frame/wechatApp'
                }, {
                    text: 'UI相关',
                    items: [{
                        text: 'Element-ui',
                        link: '/frame/ui/element-ui'
                    }, {
                        text: 'Vant',
                        link: '/frame/ui/vant'
                    }, {
                        text: 'AntD',
                        link: '/frame/ui/antd'
                    }]
                }]
            },
            {
                text: '其他',
                items: [{
                    text: '浏览器',
                    link: '/other/browser'
                }, {
                    text: '网络',
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
                        text: '微前端',
                        link: '/index/'
                    }, {
                        text: '安全',
                        link: '/index/'
                    }, {
                        text: '监控&埋点',
                        link: '/index/'
                    }, {
                        text: '缓存',
                        link: 'https://juejin.cn/post/6844904069178507278'
                    }]
                }, {
                    text: '其他',
                    items: [{
                        text: '前端规范',
                        link: '/index/'
                    }, {
                        text: '前端调试',
                        link: '/index/'
                    }, {
                        text: 'Serverless',
                        link: '/index/'
                    }, {
                        text: '源码指引',
                        link: '/index/'
                    }]
                }]
            },
            {
                text: '经验',
                items: [{
                    text: '开发技巧',
                    items: [{
                        text: 'HTML技巧',
                        link: '/experience/devSkills/html'
                    }, {
                        text: 'CSS技巧',
                        link: '/experience/devSkills/css'
                    }, {
                        text: 'JS技巧',
                        link: '/experience/devSkills/js'
                    }]
                }, {
                    text: '面试',
                    items: [{
                        text: '技术篇',
                        link: '/experience/interview/skill'
                    }, {
                        text: '项目篇',
                        link: '/experience/interview/project'
                    }, {
                        text: '前端未来',
                        link: '/experience/interview/future'
                    }]
                }]
            },
            {
                text: 'More',
                items: [{
                    text: '正则',
                    link: '/index/'
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