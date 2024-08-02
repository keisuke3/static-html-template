export default function (plop) {
  plop.setGenerator('component', {
    description: 'コンポーネント作成',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '作成するページのパスを入力してください',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{lowerCase name}}/index.html',
        templateFile: '.plopfile/index.html.hbs',
      },
      {
        type: 'add',
        path: 'src/{{lowerCase name}}/index.css',
        templateFile: '.plopfile/index.css.hbs',
      },
      {
        type: 'add',
        path: 'src/{{lowerCase name}}/index.js',
        templateFile: '.plopfile/index.js.hbs',
      },
    ],
  })
}
