import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Quincyl',
    logo: '/logo.svg',
    footer: "MIT Licensed | Copyright © 2024-present Quincyl",
    favicon: '/favicon.ico',
    socialLinks: {
      github: 'https://github.com/Adamlmh/Quincyl',
    },
    token: {
      colorPrimary: '#410099', // 设置主题色为紫色
    },
    prefersColor: { default: 'auto', switch: true }, // 允许用户切换主题
  },
});
