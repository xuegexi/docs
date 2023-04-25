import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/zh/': [
    "",
    {
      text: "V2.2.0",
      icon: "lightbulb",
      prefix: "V2.2.0/",
      children: [
        {
          text: "开始",
          prefix: "start/",
         
          icon: "launch",
          link: "start/README.md",
          collapsable: true,
          children: [
            'install.md',
            'quick_start.md'
          ],
        },
        {
          text: "部署",
          prefix: "deploy/",
          children: [
            'download.md',
            'install.md'
          ],
          link: "deploy/README.md",
          icon: "creative",
          collapsable: true,
        },
        {
          text: "开发",
          prefix: "develop/",
          children: [
            'api.md',
            'query.md',
            'write.md'
          ],
          link: "develop/README.md",
          icon: "creative",
          collapsable: true,
        },
        {
          text: "管理",
          prefix: "manage/",
          children: [
            'backup.md',
            'cluster_expansion.md',
            'cluster_shrink.md',
            'migration.md',
            'monitor.md',
            'tenant.md',
            'upgrade.md',
          ],
          link: "manage/README.md",
          icon: "tool",
          collapsable: true,
        },
        {
          text: "指南",
          prefix: "reference/",
          children: [

          ],
          link: "reference/README.md",
          icon: "generic",
          collapsable: true,
        },
        {
          text: "生态",
          prefix: "eco/",
          children: 'structure',
          link: "eco/README.md",
          icon: "leaf",
          collapsable: true,
        },
        {
          text: "发布",
          prefix: "release/",
          children: 'structure',
          link: "release/README.md",
          icon: "copy",
          collapsable: true,
        },
      ]
    },
    {
      text: "V2.3.0",
      icon: "lightbulb",
      prefix: "V2.3.0/",
      children: [
        {
          text: "开始",
          prefix: "start/",
          icon: "launch",
          link: "start/README.md",
          collapsable: true,
          children: [
            'install.md',
            'quick_start.md'
          ],
        },
      ]
    }
  ],
  "/zh/V2.2.0/": "structure",
  "/zh/V2.3.0/": "structure",
});
