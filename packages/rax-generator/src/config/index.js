const promptQuestion = [
  {
    type: 'list',
    name: 'projectType',
    message: 'What\'s your project type?',
    choices: [
      {
        name: 'App (Build universal application)',
        value: 'app',
      },
      {
        name: 'Component (Build universal component)',
        value: 'component',
      },
      {
        name: 'API (Build universal API library)',
        value: 'api',
      },
      {
        name: 'Plugin (Build plugin for miniapp)',
        value: 'plugin'
      }
    ],
    default: 'app',
  },
  {
    type: 'checkbox',
    name: 'projectTargets',
    validate(targets) {
      if (targets && targets.length > 0) return true;
      return 'Choose at least one of target.';
    },
    message: 'Choose targets your project want to run?',
    choices: function(answers) {
      let targets =
      [
        {
          name: 'Alibaba MiniApp',
          value: 'miniapp',
        },
        {
          name: 'WeChat MiniProgram',
          value: 'wechat-miniprogram',
        }
      ];
      if (answers.projectType !== 'plugin') {
        targets = [{
          name: 'Web',
          value: 'web',
        },
        {
          name: 'Kraken (Flutter)',
          value: 'kraken',
        }].concat(targets);
      }
      return targets;
    },
    default: ['web'],
  },
  {
    type: 'list',
    name: 'appType',
    message: 'What\'s your application type? (Only valid in target: Web/Kraken)',
    when(answers) {
      // app and targets not include miniapp/wechat-miniprogram
      return answers.projectType === 'app' && !(answers.projectTargets.includes('miniapp') && answers.projectTargets.includes('wechat-miniprogram'));
    },
    choices: [
      {
        name: 'Single-page application (SPA)',
        value: 'spa',
      },
      {
        name: 'Multi-page application (MPA)',
        value: 'mpa',
      },
    ],
    default: 'spa',
  },
  {
    type: 'list',
    name: 'languageType',
    message: 'What type of language do you want to use?',
    choices: [
      {
        name: 'JavaScript',
        value: 'js',
      },
      {
        name: 'TypeScript',
        value: 'ts',
      },
    ],
    default: 'ts',
  },
];

module.exports = {
  promptQuestion,
};
