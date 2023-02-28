module.exports = {
  prompt: ({ inquirer, h: helper }) => {
    const questions = [
      {
        type: "input",
        name: "inputPath",
        message: "パスを入力してください（例：about/company）",
        validate: answer => {
          if (answer) {
            return true;
          }
        },
      },
      {
        type: "toggle",
        name: "hasMeta",
        message: "メタセクションを使用しますか？",
        enabled: "はい",
        disabled: "いいえ",
        initial: false,
      },
      {
        type: "toggle",
        name: "hasLayout",
        message: "レイアウトを使用しますか？",
        enabled: "はい",
        disabled: "いいえ",
        initial: true,
      },
      {
        type: "toggle",
        name: "isSsg",
        message: "SSGにしますか？",
        enabled: "はい",
        disabled: "いいえ",
        initial: false,
      },
    ];

    return inquirer.prompt(questions).then(answers => {
      const { inputPath, hasMeta, hasLayout, isSsg } = answers;
      let path = "index";
      if (inputPath) {
        path = inputPath.slice(-1) === "/" ? `${inputPath}index` : inputPath;
      }
      const pageName = inputPath.replace("/", "-");

      return {
        path,
        hasMeta,
        hasLayout,
        pageName: helper.changeCase.pascalCase(pageName),
        isSsg,
      };
    });
  },
};
