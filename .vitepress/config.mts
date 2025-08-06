import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Objective's Personal Website",
  description: "一个使用 VitePress 搭建的个人网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '整活', link: '/整活/' }
    ],

    sidebar: [
      {
        text: '小说',
        items: [
          { text: '雨、代码与断弦的夏天', link: '/整活/novel/雨、代码与断弦的夏天.md' },
          { text: 'Wolf Pack 战术组：一 · 轨道擒杀', link: '/整活/novel/Wolf%20Pack%20战术组：一%20·%20轨道擒杀.md' },
          { text: 'Wolf Pack 战术组：二 · 神经星尘', link: '/整活/novel/Wolf%20Pack%20战术组：二%20·%20神经星尘.md'}
        ]
      },
      {
        text: '文档站',
        items: [
          { text: '文档站', link: 'https://objective-abk.pages.dev/docs/'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Federico-Prask/Objective' }
    ]
  }
})
