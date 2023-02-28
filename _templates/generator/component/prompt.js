exports.prompt = ({ inquirer, h: helper }) => {
  const firstQuestions = [
    {
      type: "select",
      name: "type",
      message: "コンポーネントの種類を選択してください",
      choices: [
        {
          message: "UI",
          name: "ui",
        },
        {
          message: "Element",
          name: "elements",
        },
        {
          message: "Feature",
          name: "features",
        },
      ],
    },
  ];
  const secondQuestions = [
    {
      type: "input",
      name: "name",
      message: "コンポーネントの名前を入力してください（パスカルケースへ変換されます/例:test example→TestExample）\n",
      validate: answer => {
        if (answer) {
          return true;
        }
      },
    },
    {
      type: "toggle",
      name: "useStorybook",
      message: "Storybookを使用しますか？",
      enabled: "はい",
      disabled: "いいえ",
      initial: true,
    },
    {
      type: "toggle",
      name: "useTest",
      message: "テストを使用しますか？",
      enabled: "はい",
      disabled: "いいえ",
      initial: false,
    },
  ];

  const featureQuestion = [
    {
      type: "input",
      name: "featureName",
      message: "機能の名前をいれてください",
      validate: answer => {
        if (answer) {
          return true;
        }
      },
    },
  ];

  const output = answers => {
    const { type, featureName, name, useStorybook, useTest, isFeature } = answers;
    const componentName = helper.changeCase.pascalCase(name);
    const componentPath = `${
      isFeature ? `${type}/${featureName}/components` : `components/${type}`
    }/${helper.changeCase.pascalCase(name)}`;
    const storyTitle = isFeature
      ? `Features/${helper.changeCase.pascalCase(featureName)}/${componentName}`
      : `Components/${helper.changeCase.pascalCase(type)}/${componentName}`;

    return {
      componentName,
      componentPath,
      storyTitle,
      useStorybook,
      useTest,
    };
  };

  return inquirer.prompt(firstQuestions).then(firstAnswers => {
    if (firstAnswers.type === "features") {
      return inquirer.prompt(featureQuestion).then(featureAnswers => {
        return inquirer.prompt(secondQuestions).then(secondAnswers => {
          return output({
            ...firstAnswers,
            ...secondAnswers,
            ...featureAnswers,
            isFeature: true,
          });
        });
      });
    }

    return inquirer.prompt(secondQuestions).then(secondAnswers => {
      return output({
        ...firstAnswers,
        ...secondAnswers,
        isFeature: false,
      });
    });
  });
};
