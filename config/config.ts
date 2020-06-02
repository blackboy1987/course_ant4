// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
  },
  locale: false,
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },

    {
      path: '/welcome',
      name: '首页',
      component: './Welcome',
    },
    {
      path: '/button',
      name: 'Button 按钮',
      component: './button',
    },
    {
      path: '/icon',
      name: 'Icon 图标',
      component: './Welcome',
    },
    {
      path: '/typography',
      name: 'Typography 排版',
      component: './typography',
    },
    {
      path: '/divider',
      name: 'Divider 分割线',
      component: './divider',
    },
    {
      path: '/grid',
      name: 'Grid 栅格',
      component: './grid',
    },
    {
      path: '/layout',
      name: 'Layout 布局',
      component: './Welcome',
    },
    {
      path: '/space',
      name: 'Space 间距',
      component: './space',
    },

    {
      path: '/affix',
      name: 'Affix 固钉',
      component: './affix',
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb 面包屑',
      component: './breadcrumb',
    },
    {
      path: '/dropdown',
      name: 'Dropdown 下拉菜单',
      component: './dropdown',
    },

    {
      path: '/menu',
      name: 'Menu 导航菜单',
      component: './menu',
    },
    {
      path: '/pagination',
      name: 'Pagination 分页',
      component: './pagination',
    },
    {
      path: '/pageHeader',
      name: 'PageHeader 页头',
      component: './pageHeader',
    },
    {
      path: '/steps',
      name: 'Steps 步骤条',
      component: './steps',
    },

    {
      path: '/autoComplete',
      name: 'AutoComplete 自动完成',
      component: './autoComplete',
    },
    {
      path: '/checkbox',
      name: 'checkbox 多选框',
      component: './checkbox',
    },

    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
