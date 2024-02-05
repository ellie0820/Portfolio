const data = {
  site_name: 'SITE NAME',
  copyright: '(C) SITE NAME YYYY',
  filter: [
    'reset',
    'responsive',
    'desktop',
    'mobile',
    'html',
    'pug',
    'css',
    'postcss',
    'sass',
    'javascript',
    'es6',
    'typescript',
    'next',
    'react',
    'vue',
    'design',
  ],
  portfolio: {
    heading: 'PORTFOLIO',
    description: '今まで制作したページを紹介しています',
    items: [
      {
        id: '1',
        imageName: '1',
        desktopWidth: '1280',
        desktopHeight: '1280',
        mobileWidth: '750',
        mobileHeight: '750',
        contents: [
          {
            id: 'project',
            text: 'Project Name 1',
          },
          {
            id: 'site',
            text: 'Site Name 1',
            href: '#',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'EN',
          },
          {
            id: 'tags',
            tags: ['desktop', 'react', 'postcss'],
          },
          {
            id: 'summary',
            text: '吾輩わがはいは猫である。名前はまだ無い。\nどこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。',
          },
          {
            id: 'browser',
            text: 'Windows: Google Chrome / Mac: Google Chrome',
          },
        ],
      },
      {
        id: '2',
        imageName: '2',
        contents: [
          {
            id: 'project',
            text: 'Project Name 2',
          },
          {
            id: 'site',
            text: 'Site Name 2',
            href: '#',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA, EN',
          },
          {
            id: 'tags',
            tags: ['responsive', 'pug', 'postcss', 'javascript'],
          },
          {
            id: 'summary',
            text: '吾輩わがはいは猫である。名前はまだ無い。\nどこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。',
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '3',
        imageName: '3',
        contents: [
          {
            id: 'project',
            text: 'Project Name 3',
          },
          {
            id: 'site',
            text: 'Site Name 3',
            href: '#',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA, EN, 他 (全23カ国 26言語)',
          },
          {
            id: 'tags',
            tags: ['desktop', 'next', 'postcss'],
          },
          {
            id: 'summary',
            text: '吾輩わがはいは猫である。名前はまだ無い。\nどこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。',
          },
          {
            id: 'browser',
            text: 'Windows: Google Chrome / Mac: Google Chrome',
          },
        ],
      },
      {
        id: '4',
        imageName: '4',
        contents: [
          {
            id: 'project',
            text: 'Project Name 4',
          },
          {
            id: 'site',
            text: 'Site Name 4',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA, EN, 他 (全23カ国 26言語)',
          },
          {
            id: 'tags',
            tags: ['responsive', 'pug', 'postcss', 'typescript'],
          },
          {
            id: 'summary',
            text: '吾輩わがはいは猫である。名前はまだ無い。\nどこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。',
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '5',
        imageName: '5',
        contents: [
          {
            id: 'project',
            text: 'Project Name 5',
          },
          {
            id: 'site',
            text: 'Site Name 5',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: ' Designer',
          },
          {
            id: 'language',
            text: 'JA',
          },
          {
            id: 'tags',
            tags: ['responsive', 'design'],
          },
          {
            id: 'summary',
            text: '吾輩わがはいは猫である。名前はまだ無い。\nどこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。',
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '6',
        imageName: '6',
        contents: [
          {
            id: 'site',
            text: 'Site Name 6',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA, EN',
          },
          {
            id: 'tags',
            tags: ['responsive', 'pug', 'postcss', 'javascript'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '7',
        imageName: '7',
        contents: [
          {
            id: 'site',
            text: 'Site Name 7',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA, EN',
          },
          {
            id: 'tags',
            tags: ['responsive', 'pug', 'postcss', 'javascript'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '8',
        imageName: '8',
        contents: [
          {
            id: 'site',
            text: 'Site Name 8',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA, EN, FR',
          },
          {
            id: 'tags',
            tags: ['responsive', 'pug', 'postcss', 'javascript'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '9',
        imageName: '9',
        contents: [
          {
            id: 'site',
            text: 'Site Name 9',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA',
          },
          {
            id: 'tags',
            tags: ['responsive', 'pug', 'postcss', 'javascript'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '10',
        imageName: '10',
        contents: [
          {
            id: 'site',
            text: 'Site Name 10',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA',
          },
          {
            id: 'tags',
            tags: ['responsive', 'pug', 'postcss', 'javascript'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '11',
        imageName: '11',
        contents: [
          {
            id: 'site',
            text: 'Site Name 11',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA',
          },
          {
            id: 'tags',
            tags: ['responsive', 'pug', 'postcss', 'javascript'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Edge, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '12',
        imageName: '12',
        desktopWidth: '2250',
        desktopHeight: '1336',
        contents: [
          {
            id: 'site',
            text: 'Site Name 12',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA',
          },
          {
            id: 'tags',
            tags: ['mobile', 'vue', 'sass'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome',
          },
        ],
      },
      {
        id: '13',
        imageName: '13',
        contents: [
          {
            id: 'site',
            text: 'Site Name 13',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Frontend Engineer',
          },
          {
            id: 'language',
            text: 'JA',
          },
          {
            id: 'tags',
            tags: ['mobile', 'html', 'sass'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome',
          },
        ],
      },
      {
        id: '14',
        imageName: '14',
        contents: [
          {
            id: 'site',
            text: 'Site Name 14',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Markup Engineer',
          },
          {
            id: 'language',
            text: 'JA',
          },
          {
            id: 'tags',
            tags: ['desktop', 'html', 'sass'],
          },
          {
            id: 'browser',
            text: 'Windows: Internet Explorer, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
      {
        id: '15',
        imageName: '15',
        contents: [
          {
            id: 'site',
            text: 'Site Name 15',
          },
          {
            id: 'company',
            text: 'Company Name',
          },
          {
            id: 'release',
            text: 'YYYY/MM',
          },
          {
            id: 'occupation',
            text: 'Markup Engineer',
          },
          {
            id: 'language',
            text: 'JA',
          },
          {
            id: 'tags',
            tags: ['mobile', 'html', 'sass'],
          },
          {
            id: 'browser',
            text: 'iPhone: Safari / Android: Google Chrome / Windows: Internet Explorer, Google Chrome, Fire Fox / Mac: Safari, Google Chrome, Fire Fox',
          },
        ],
      },
    ],
  },
  about: {
    heading: 'ABOUT ME',
    contents: [
      {
        id: 'name',
        text: 'Name (名前)',
      },
      {
        id: 'occupation',
        text: 'Frontend Engineer (For XX years)',
      },
      {
        id: 'skills',
        tags: [
          'html',
          'pug',
          'css',
          'postcss',
          'sass',
          'javascript',
          'es6',
          'typescript',
          'next',
          'react',
          'vue',
          'jquery',
          'git',
          'npm',
          'webpack',
          'googleappscript',
          'stylelint',
          'eslint',
          'babel',
        ],
      },
      {
        id: 'tools',
        tags: [
          'mac',
          'vscode',
          'figma',
          'photoshop',
          'illustrator',
          'github',
          'sourcetree',
          'jira',
          'slack',
          'googledrive',
          'outlook',
        ],
      },
      {
        id: 'designData',
        links: [
          {
            className: 'Figma',
            ariaLabel: 'Figma',
            href: '#',
          },
          {
            className: 'Github',
            ariaLabel: 'Github',
            href: '#',
          },
        ],
      },
    ],
  },
}

export default data
