export default function (plop) {
  plop.setGenerator('component', {
    description: 'コンポーネント作成',
    prompts: [
      {
        type: 'list',
        name: 'directory',
        message: 'コンポーネントを作成するディレクトリを選択してください',
        choices: ['pages', 'layouts', 'ui', 'features'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名を入力してください',
      },
    ],
    actions: (data) => {
      const pageTemplate = [
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/index.astro',
          templateFile: '.plopfile/pages/index.astro.hbs',
        },
      ]

      const layoutTemplate = [
        {
          type: 'add',
          path: 'src/layouts/{{pascalCase name}}/index.tsx',
          templateFile: '.plopfile/layouts/index.tsx.hbs',
          when: (answers) => answers.directory === 'layouts',
        },
        {
          type: 'add',
          path: 'src/layouts/{{pascalCase name}}/index.module.css',
          templateFile: '.plopfile/layouts/index.module.css.hbs',
          when: (answers) => answers.directory === 'layouts',
        },
        {
          type: 'add',
          path: 'src/layouts/{{pascalCase name}}/index.stories.tsx',
          templateFile: '.plopfile/layouts/index.stories.tsx.hbs',
          when: (answers) => answers.directory === 'layouts',
        },
      ]

      const componentTemplate = [
        {
          type: 'add',
          path: 'src/components/{{directory}}/{{pascalCase name}}/index.tsx',
          templateFile: '.plopfile/components/index.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{directory}}/{{pascalCase name}}/index.module.css',
          templateFile: '.plopfile/components/index.module.css.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{directory}}/{{pascalCase name}}/index.stories.tsx',
          templateFile: '.plopfile/components/index.stories.tsx.hbs',
        },
      ]

      if (data.directory === 'pages') {
        return pageTemplate
      }
      if (data.directory === 'layouts') {
        return layoutTemplate
      }
      if (data.directory === 'features' || data.directory === 'ui') {
        return componentTemplate
      }
    },
  })
}
