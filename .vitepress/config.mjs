import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blog/',
  title: "WebWong 的技术记录",
  description: "A VitePress Site",
  themeConfig: {
    // 自定义上次更新的文本和日期格式
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    logo:'/logo.png',

    // 文章目录设置
    outlineTitle: '目录',
    outline: [2,6],
    // https://vitepress.dev/reference/default-theme-config
    // 导航
    nav: [
      // { 
      //   text: '更多',
      //   items: [
      //     {text: 'Home', link: '/' },
      //     {text: 'Home',link: '/'  }
      //   ]
      // },
      { text: 'Home', link: '/' },
      { text: '前端', link: '/markdown-examples' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '设计模式',
        items: [
          { text: '面向对像', link: '/markdown-examples' },
          { text: '工厂模式', link: '/api-examples' }
        ]
      }
    ],

    // 外链
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChaoNian/vitepress-blog' }
    ],

    // 页脚
    footer: {
      copyright: 'Copyright@ 2024 WebWong'
    }
  }
})
